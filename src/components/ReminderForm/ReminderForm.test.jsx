import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReminderForm from './ReminderForm';
import * as utils from '../../utils/utils';

describe('ReminderForm Component', () => {
  const onSaveReminderMock = jest.fn();
  const onDeleteReminderMock = jest.fn();
  const onCancelMock = jest.fn();

  const defaultProps = {
    editingReminder: null,
    selectedDate: new Date(),
    onSaveReminder: onSaveReminderMock,
    onDeleteReminder: onDeleteReminderMock,
    onCancel: onCancelMock,
  };

  it('renders the form with default values', () => {
    render(<ReminderForm {...defaultProps} />);

    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const cancelButton = screen.getByText('cancel');
    const saveButton = screen.getByText('save');

    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(dateInput).toHaveValue('');
    expect(timeInput).toHaveValue('');
    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it('calls onSaveReminder when save button is clicked with valid data', () => {
    jest
      .spyOn(utils, 'getFormattedMMDDYYYY')
      .mockReturnValue('01/01/2023');

    render(<ReminderForm {...defaultProps} />);

    const validData = {
      title: 'Test Reminder',
      description: 'Test description',
      date: '01/01/2023',
      time: '12:00',
      color: '#FFCC80',
    };

    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: validData.title },
    });
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: validData.description },
    });
    fireEvent.change(screen.getByLabelText('Date'), {
      target: { value: validData.date },
    });
    fireEvent.change(screen.getByLabelText('Time'), {
      target: { value: validData.time },
    });

    const colorBoxes = screen.getAllByTestId('color-box');
    const colorBox = colorBoxes[2];

    fireEvent.click(colorBox);

    fireEvent.click(screen.getByText('save'));

    expect(onSaveReminderMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: validData.title,
        description: validData.description,
        date: expect.any(Date),
        time: validData.time,
        color: validData.color,
      })
    );

    jest.restoreAllMocks();
  });

  it('calls onCancel when cancel button is clicked', () => {
    render(<ReminderForm {...defaultProps} />);

    fireEvent.click(screen.getByText('cancel'));

    expect(onCancelMock).toHaveBeenCalled();
  });

  it('calls onDeleteReminder when remove button is clicked', () => {
    const editingReminder = {
      id: '1',
      title: 'Editing Reminder',
      description: 'Editing description',
      date: new Date(),
      time: '14:00',
      color: '#FF8ED4',
    };

    render(
      <ReminderForm
        {...defaultProps}
        editingReminder={editingReminder}
      />
    );

    fireEvent.click(screen.getByText('remove'));

    expect(onDeleteReminderMock).toHaveBeenCalledWith(
      editingReminder.id
    );
  });
});

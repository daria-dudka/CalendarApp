import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RemindersList from './RemindersList';

describe('RemindersList Component', () => {
  it('renders a list of reminders', () => {
    const reminders = [
      {
        id: '1',
        title: 'Test Reminder 1',
        description: 'Description 1',
        time: '12:00',
        color: '#FFCC80',
      },
      {
        id: '2',
        title: 'Test Reminder 2',
        description: 'Description 2',
        time: '3:30',
        color: '#29CCE5',
      },
    ];

    render(<RemindersList reminders={reminders} />);

    const remindersList = screen.getByRole('list');
    const reminderItems = screen.getAllByRole('listitem');

    expect(remindersList).toBeInTheDocument();
    expect(reminderItems).toHaveLength(2);
  });

  it('renders a message when there are no reminders', () => {
    render(<RemindersList reminders={[]} />);

    const noRemindersMessage = screen.getByText(
      /No reminders registered so far/i
    );

    expect(noRemindersMessage).toBeInTheDocument();
  });

  it('renders reminder details correctly', () => {
    const reminders = [
      {
        id: '1',
        title: 'Test Reminder',
        description: 'Description',
        time: '12:00',
        color: '#FFCC80',
      },
    ];

    render(<RemindersList reminders={reminders} />);

    const reminderItem = screen.getByRole('listitem');
    const reminderTitle = screen.getByText('Test Reminder');
    const reminderDescription = screen.getByText('Description');
    const reminderTime = screen.getByText('12:00');

    expect(reminderItem).toBeInTheDocument();
    expect(reminderTitle).toBeInTheDocument();
    expect(reminderDescription).toBeInTheDocument();
    expect(reminderTime).toBeInTheDocument();
  });
});

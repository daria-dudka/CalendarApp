import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CalendarHeader from './CalendarHeader';

describe('CalendarHeader Component', () => {
  it('renders the current year and month', () => {
    const currentMonth = new Date(2023, 8, 10);

    render(
      <CalendarHeader
        currentMonth={currentMonth}
        onPreviousMonth={() => {}}
        onNextMonth={() => {}}
      />
    );

    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('September')).toBeInTheDocument();
  });

  it('calls onPreviousMonth and onNextMonth when previous and next buttons are clicked', () => {
    const mockOnPreviousMonth = jest.fn();
    const mockOnNextMonth = jest.fn();

    render(
      <CalendarHeader
        currentMonth={new Date()}
        onPreviousMonth={mockOnPreviousMonth}
        onNextMonth={mockOnNextMonth}
      />
    );

    const previousMonthButton =
      screen.getByLabelText('previous month');
    previousMonthButton.click();
    expect(mockOnPreviousMonth).toHaveBeenCalled();

    const nextMonthButton = screen.getByLabelText('next month');
    nextMonthButton.click();
    expect(mockOnNextMonth).toHaveBeenCalled();
  });
});

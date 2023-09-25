import React from 'react';
import { useSelector } from 'react-redux';
import './CalendarGrid.css';
import { daysOfTheWeek } from '../../utils/constants';
import {
  areDatesEqual,
  getFilteredReminders,
  isTheSameMonth,
} from '../../utils/utils';

const CalendarGrid = ({ currentMonth, selectedDate, onDayClick }) => {
  const reminders = useSelector((state) => state.reminders);

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );

  const emptyCells = firstDayOfMonth.getDay();

  const numberOfDaysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className='calendar-grid'>
      {daysOfTheWeek.map((day) => (
        <div key={day} className='day-of-week'>
          {day}
        </div>
      ))}

      {Array.from({ length: emptyCells }).map((_, index) => (
        <div
          key={`empty-${index}`}
          data-testid='empty-cell'
          className='empty-cell'
        />
      ))}

      {Array.from({ length: numberOfDaysInMonth }, (_, index) => {
        const day = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth(),
          index + 1
        );

        return (
          <div
            key={day}
            className={`calendar-day ${
              !isTheSameMonth(day, currentMonth) ? 'inactive' : ''
            } ${areDatesEqual(day, new Date()) ? 'today' : ''} ${
              areDatesEqual(day, selectedDate) ? 'selected' : ''
            } ${
              getFilteredReminders(reminders, day).length > 0
                ? 'hasReminders'
                : ''
            }`}
            onClick={() => onDayClick(day)}
          >
            {day.getDate()}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;

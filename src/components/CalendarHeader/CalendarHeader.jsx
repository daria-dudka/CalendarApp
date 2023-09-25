import React from 'react';
import './CalendarHeader.css';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const CalendarHeader = ({
  currentMonth,
  onPreviousMonth,
  onNextMonth,
}) => {
  return (
    <div className='calendar-header'>
      <h2 className='current-year'>
        {currentMonth.toLocaleDateString('en-US', {
          year: 'numeric',
        })}
      </h2>
      <h2 className='current-month'>
        {currentMonth.toLocaleDateString('en-US', {
          month: 'long',
        })}
      </h2>
      <div className='calendar-nav'>
        <button
          type='button'
          aria-label='previous month'
          onClick={onPreviousMonth}
          className='nav-btn'
        >
          <ChevronLeftIcon />
        </button>
        <button
          type='button'
          aria-label='next month'
          onClick={onNextMonth}
          className='nav-btn'
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;

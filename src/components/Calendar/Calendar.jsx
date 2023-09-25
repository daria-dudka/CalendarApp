import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Calendar.css';
import {
  addReminder,
  editReminder,
  deleteReminder,
} from '../../store/actions';
import {
  getFilteredReminders,
  getFullDateString,
} from '../../utils/utils';
import Button from '../Button/Button';
import ReminderForm from '../ReminderForm/ReminderForm';
import RemindersList from '../RemindersList/RemindersList';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editingReminder, setEditingReminder] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminders);
  const filteredReminders = getFilteredReminders(
    reminders,
    selectedDate
  );

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    if (isFormVisible) handleCancelReminder();
  };

  const handleEditReminder = (reminder) => {
    setEditingReminder(reminder);
    setIsFormVisible(true);
  };

  const handleCancelReminder = () => {
    setEditingReminder(null);
    setIsFormVisible(false);
  };

  const handleDeleteReminder = (id) => {
    dispatch(deleteReminder(id));
    handleCancelReminder();
  };

  const handleSaveReminder = (reminder) => {
    if (editingReminder) {
      dispatch(editReminder(reminder));
    } else {
      dispatch(addReminder(reminder));
    }
    handleCancelReminder();
    setSelectedDate(reminder.date);
    setCurrentMonth(reminder.date);
  };

  return (
    <div className='calendar'>
      <div className='reminders-side'>
        {isFormVisible ? (
          <ReminderForm
            editingReminder={editingReminder}
            onSaveReminder={handleSaveReminder}
            onDeleteReminder={handleDeleteReminder}
            selectedDate={selectedDate}
            onCancel={handleCancelReminder}
          />
        ) : (
          <>
            <div className='reminders-header'>
              <h1 className='title'>
                {getFullDateString(selectedDate)}
              </h1>
              <Button
                name='add'
                onClick={() => setIsFormVisible(true)}
              >
                Add Reminder
              </Button>
            </div>
            <RemindersList
              reminders={filteredReminders}
              onHandleEdit={handleEditReminder}
            />
          </>
        )}
      </div>

      <div className='calendars-side'>
        <CalendarHeader
          currentMonth={currentMonth}
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
        />
        <CalendarGrid
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
        />
        <p className='calendar-footer'>
          © 2023 Codelitt Inc All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Calendar;

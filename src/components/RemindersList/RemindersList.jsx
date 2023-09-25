import React from 'react';
import './RemindersList.css';
import noReminders from '../../assets/noReminders.png';
import { compareReminderTimes } from '../../utils/utils';

const RemindersList = ({ reminders, onHandleEdit }) => {
  return reminders?.length > 0 ? (
    <ul className='reminders-list'>
      {reminders?.sort(compareReminderTimes).map((reminder) => (
        <li key={reminder.id} className='reminder-item'>
          <div
            className='reminder-line'
            style={{
              backgroundColor: reminder.color,
            }}
          />
          <div className='reminder-info'>
            <div className='reminder-title'>{reminder.title}</div>
            <div className='reminder-description'>
              {reminder.description}
            </div>
          </div>
          <div className='reminder-time'>{reminder.time}</div>
          <button
            className='reminder-edit'
            aria-label='Edit Reminder'
            onClick={() => onHandleEdit(reminder)}
          ></button>
        </li>
      ))}
    </ul>
  ) : (
    <div className='no-reminders'>
      <img
        className='no-reminders-img'
        src={noReminders}
        alt='No Reminders'
      />
      <h2 className='no-reminders-text'>
        No reminders registered so far
      </h2>
    </div>
  );
};

export default RemindersList;

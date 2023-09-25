import React, { useState } from 'react';
import {
  getFormattedMMDDYYYY,
  getFullDateString,
  isValidDate,
  isValidTime,
} from '../../utils/utils';
import ColorPicker from '../ColorPicker/ColorPicker';
import './ReminderForm.css';
import Button from '../Button/Button';

const ReminderForm = ({
  editingReminder,
  selectedDate,
  onSaveReminder,
  onDeleteReminder,
  onCancel,
}) => {
  const [reminderTitle, setReminderTitle] = useState(
    editingReminder?.title ?? ''
  );
  const [reminderDesc, setReminderDesc] = useState(
    editingReminder?.description ?? ''
  );
  const [reminderColor, setReminderColor] = useState(
    editingReminder?.color ?? ''
  );
  const [reminderTime, setReminderTime] = useState(
    editingReminder?.time ?? ''
  );
  const [reminderDateString, setReminderDateString] = useState(
    getFormattedMMDDYYYY(editingReminder?.date) ?? ''
  );

  const handleSaveReminder = () => {
    if (
      reminderTitle &&
      reminderDesc &&
      reminderColor &&
      isValidTime(reminderTime) &&
      isValidDate(reminderDateString)
    ) {
      onSaveReminder({
        id:
          editingReminder?.id ??
          Date.now() + (Math.random() * 100000).toFixed(),
        title: reminderTitle,
        description: reminderDesc,
        date: new Date(reminderDateString),
        time: reminderTime,
        color: reminderColor,
      });
    }
  };

  return (
    <div className='reminder-form'>
      <h1 className='title'>
        {editingReminder ? 'Edit reminder' : 'Add reminder'} -
        {` ${getFullDateString(selectedDate)}`}
      </h1>
      <label className='label' htmlFor='reminderTitle'>
        Title
      </label>
      <input
        className='form-input'
        id='reminderTitle'
        type='text'
        placeholder='Title'
        value={reminderTitle}
        maxLength={60}
        onChange={(e) => setReminderTitle(e.target.value)}
      />
      <label className='label' htmlFor='reminderDesc'>
        Description
      </label>
      <textarea
        className='form-input'
        id='reminderDesc'
        type='text'
        placeholder='Description'
        value={reminderDesc}
        onChange={(e) => setReminderDesc(e.target.value)}
        maxLength={130}
        resize='none'
      />
      <div className='form-flex-container'>
        <div className='form-input-wrapper'>
          <label className='label' htmlFor='reminderDate'>
            Date
          </label>
          <input
            className='form-input'
            id='reminderDate'
            type='text'
            placeholder='MM/DD/YYYY'
            value={reminderDateString}
            onChange={(e) => setReminderDateString(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label className='label' htmlFor='reminderTime'>
            Time
          </label>
          <input
            className='form-input'
            id='reminderTime'
            type='text'
            placeholder='HH:MM'
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
          />
        </div>
      </div>
      <ColorPicker
        reminderColor={reminderColor}
        onChangeColor={setReminderColor}
      />
      <div className='form-btn-container'>
        {editingReminder && (
          <Button
            name='remove'
            onClick={() => onDeleteReminder(editingReminder?.id)}
          />
        )}
        <Button name='cancel' onClick={onCancel} />
        <Button name='save' onClick={handleSaveReminder} />
      </div>
    </div>
  );
};

export default ReminderForm;

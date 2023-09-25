import {
  ADD_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
  addReminder,
  editReminder,
  deleteReminder,
} from './actions';

describe('Action Creators', () => {
  it('should create an action to add a reminder', () => {
    const reminder = {
      id: '1',
      title: 'Test Reminder',
      description: 'Test description',
      date: new Date(2023, 8, 10),
      time: '12:00',
      color: '#FFCC80',
    };

    const expectedAction = {
      type: ADD_REMINDER,
      payload: reminder,
    };

    expect(addReminder(reminder)).toEqual(expectedAction);
  });

  it('should create an action to edit a reminder', () => {
    const reminder = {
      id: '1',
      title: 'Updated Reminder',
      description: 'Updated description',
      date: new Date(2023, 8, 11),
      time: '14:00',
      color: '#FF8ED4',
    };

    const expectedAction = {
      type: EDIT_REMINDER,
      payload: reminder,
    };

    expect(editReminder(reminder)).toEqual(expectedAction);
  });

  it('should create an action to delete a reminder', () => {
    const id = '1';

    const expectedAction = {
      type: DELETE_REMINDER,
      payload: id,
    };

    expect(deleteReminder(id)).toEqual(expectedAction);
  });
});

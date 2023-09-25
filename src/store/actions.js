export const ADD_REMINDER = 'ADD_REMINDER';
export const EDIT_REMINDER = 'EDIT_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export function addReminder(reminder) {
  return {
    type: ADD_REMINDER,
    payload: reminder,
  };
}

export function editReminder(reminder) {
  return {
    type: EDIT_REMINDER,
    payload: reminder,
  };
}

export function deleteReminder(id) {
  return {
    type: DELETE_REMINDER,
    payload: id,
  };
}

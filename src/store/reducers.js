import { mockReminders } from '../utils/mockData';
import {
  ADD_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from './actions';

const initialState = {
  reminders: mockReminders,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case EDIT_REMINDER:
      const updatedReminders = state.reminders.map((reminder) =>
        reminder.id === action.payload.id ? action.payload : reminder
      );
      return {
        ...state,
        reminders: updatedReminders,
      };
    case DELETE_REMINDER:
      const filteredReminders = state.reminders.filter(
        (reminder) => reminder.id !== action.payload
      );
      return {
        ...state,
        reminders: filteredReminders,
      };
    default:
      return state;
  }
}

export default rootReducer;

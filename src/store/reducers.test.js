import rootReducer from './reducers';
import {
  ADD_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from './actions';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      reminders: [],
    };

    const action = {};

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle ADD_REMINDER', () => {
    const initialState = {
      reminders: [],
    };

    const action = {
      type: ADD_REMINDER,
      payload: {
        id: '1',
        title: 'Test Reminder',
        description: 'Test description',
        date: new Date(2023, 8, 10),
        time: '12:00',
        color: '#FFCC80',
      },
    };

    const expectedState = {
      reminders: [action.payload],
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle EDIT_REMINDER', () => {
    const initialState = {
      reminders: [
        {
          id: '1',
          title: 'Initial Reminder',
          description: 'Initial description',
          date: new Date(2023, 8, 10),
          time: '12:00',
          color: '#FFCC80',
        },
      ],
    };

    const action = {
      type: EDIT_REMINDER,
      payload: {
        id: '1',
        title: 'Updated Reminder',
        description: 'Updated description',
        date: new Date(2023, 8, 11),
        time: '14:00',
        color: '#FF8ED4',
      },
    };

    const expectedState = {
      reminders: [action.payload],
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle DELETE_REMINDER', () => {
    const initialState = {
      reminders: [
        {
          id: '1',
          title: 'Reminder 1',
          description: 'Description 1',
          date: new Date(2023, 8, 10),
          time: '12:00',
          color: '#FFCC80',
        },
        {
          id: '2',
          title: 'Reminder 2',
          description: 'Description 2',
          date: new Date(2023, 8, 11),
          time: '14:00',
          color: '#FF8ED4',
        },
      ],
    };

    const action = {
      type: DELETE_REMINDER,
      payload: '1',
    };

    const expectedState = {
      reminders: [
        {
          id: '2',
          title: 'Reminder 2',
          description: 'Description 2',
          date: new Date(2023, 8, 11),
          time: '14:00',
          color: '#FF8ED4',
        },
      ],
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});

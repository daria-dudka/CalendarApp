import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {
  reminders: [
    {
      id: '155982514859883316',
      title: 'Standups and DS&T',
      description:
        'Codelitt Inc. is inviting to a Zoom meeting in which everyone as people from the company will participate.',
      date: new Date(2023, 8, 10),
      time: '11:15',
      color: '#C8E6C9',
    },
    {
      id: '144982514859883323',
      title: 'Architecture Overview',
      description:
        'Meeting for the presentation of the new application architecture.',
      date: new Date(2023, 8, 10),
      time: '12:00',
      color: '#FFCC80',
    },
  ],
};

const store = mockStore(initialState);
describe('Calendar Component', () => {
  it('renders the Calendar component correctly', () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );

    expect(screen.getByText('Add Reminder')).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CalendarGrid from './CalendarGrid';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {
  reminders: [
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

describe('CalendarGrid Component', () => {
  it('renders day headers and empty cells correctly', () => {
    render(
      <Provider store={store}>
        <CalendarGrid
          currentMonth={new Date(2023, 8, 10)}
          selectedDate={new Date(2023, 8, 15)}
          onDayClick={() => {}}
        />
      </Provider>
    );

    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();

    expect(screen.getAllByTestId('empty-cell')).toHaveLength(
      new Date(2023, 8, 15).getDay()
    );
  });

  it('renders days of the month correctly', () => {
    render(
      <Provider store={store}>
        <CalendarGrid
          currentMonth={new Date(2023, 8, 10)}
          selectedDate={new Date(2023, 8, 15)}
          hasReminders={false}
          onDayClick={() => {}}
        />
      </Provider>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    const selectedDay = screen.getByText('15');
    expect(selectedDay).toHaveClass('selected');
  });
});

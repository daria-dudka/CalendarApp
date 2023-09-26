# React Calendar App

This is a demo calendar application using React and Redux for state management. It was bootstrapped with create-react-app.

You can find the deployed application by going to this link https://calendar-app-peach.vercel.app/

## Features

- Single month view of a calendar for the current month.
- Ability to switch to the previous or next month.
- The user is able to add new reminder with title, description, date, time and color.
- Ability to edit reminders, including changing title, description, date, time and color.
- Ability to delete reminders.
- All reminders are displayed in the correct time order and with appropriate color.
- The calendar is expanded for different years and months.

## Getting Started

1. Clone the repository:

### git clone [repository-url]

2. Navigate to the project folder:

### cd react-calendar-app

3. Install dependencies:

### npm install

4. Start the development server:

### npm start

5. Open your web browser and go to http://localhost:3000 to access the calendar application.

6. Launch the test runner in the interactive watch mode.

### npm test

## How to Use the Calendar App

- Click on the calendar arrows to switch between different months.
- Click on the day cell to select another day.
- Selected day is represented in a circle, today's date has different font color.
- Click on the day with the blue dot to see the date with reminders.
- To add a reminder, click on a "Add reminder" button, enter the reminder details (title, description, date, time, and color), and click the "Save" button.
- To edit a reminder, click on the Edit button, make changes to the details, and click the "Save" button.
- To delete a reminder, click on the Edit button and then click the "Remove" button.
- If you refresh the browser the redux store will go back to the initial state with some mock data and the selected date would be equal to the today's date

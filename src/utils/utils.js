// Dates

export function getFullDateString(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date?.toLocaleDateString('en-US', options);
}

export function getFormattedMMDDYYYY(date) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return date?.toLocaleDateString('en-US', options);
}

export function isTheSameMonth(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  return month1 === month2;
}

export function areDatesEqual(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }

  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
}

// Validation

export function isValidDate(dateString) {
  const datePattern =
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

  if (!datePattern.test(dateString)) {
    return false;
  }

  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) {
    return false;
  }

  return getFormattedMMDDYYYY(parsedDate) === dateString;
}

export function isValidTime(timeString) {
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

  return timePattern.test(timeString);
}

// Filter reminders

export function getFilteredReminders(reminders, date) {
  return reminders.filter((reminder) =>
    areDatesEqual(reminder.date, date)
  );
}

// Sort reminders

export function compareReminderTimes(a, b) {
  const timeA = a.time.split(':').map(Number);
  const timeB = b.time.split(':').map(Number);

  if (timeA[0] < timeB[0]) {
    return -1;
  }
  if (timeA[0] > timeB[0]) {
    return 1;
  }

  if (timeA[1] < timeB[1]) {
    return -1;
  }
  if (timeA[1] > timeB[1]) {
    return 1;
  }

  return 0;
}

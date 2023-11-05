import dayjs from 'dayjs';

export function GetMonth(month: number = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  const firstDate = daysMatrix[0][0];
  const lastDate = daysMatrix[daysMatrix.length - 1][daysMatrix[daysMatrix.length - 1].length - 1];

  return { daysMatrix, firstDate, lastDate };
}

export function getFirstDateOfWeek(date: Date) {
  const day = date.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const diff = date.getDate() - day; // Calculate the difference between the current date and the day of the week (Sunday)
  const firstDateOfWeek = new Date(date); // Create a new date object to avoid modifying the original date
  firstDateOfWeek.setDate(diff);
  firstDateOfWeek.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  return firstDateOfWeek;
}

import dayjs from "dayjs";

export const getDaysInMonth = (month, year) => {
  const firstDay = dayjs(`${year}-${month}-01`);
  const daysInMonth = firstDay.daysInMonth();
  const startDay = firstDay.day(); // 0 = Sunday, 6 = Saturday

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(dayjs(`${year}-${month}-${i < 10 ? `0${i}` : i}`));
  }

  return days;
};

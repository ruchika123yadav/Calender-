import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getDaysInMonth } from "../utils/dateUtils";
import Header from "./Header";
import DayCell from "./DayCell";

const Calendar = () => {
  const today = dayjs();
  const [month, setMonth] = useState(today.month() + 1);
  const [year, setYear] = useState(today.year());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handlePrev = () => {
    if (month === 1) {
      setMonth(12);
      setYear(prev => prev - 1);
    } else {
      setMonth(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (month === 12) {
      setMonth(1);
      setYear(prev => prev + 1);
    } else {
      setMonth(prev => prev + 1);
    }
  };

  const days = getDaysInMonth(month, year);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header month={month} year={year} onPrev={handlePrev} onNext={handleNext} />
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
          <div key={d} className="text-center font-bold">{d}</div>
        ))}
        {days.map((day, idx) => (
          <DayCell key={idx} date={day} currentDate={today} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;

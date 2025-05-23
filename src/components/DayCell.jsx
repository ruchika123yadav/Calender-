import React from "react";
import dayjs from "dayjs";

const DayCell = ({ date, currentDate, events }) => {
  const isToday = dayjs().isSame(date, "day");

  const dayEvents = events.filter(e => dayjs(e.date).isSame(date, "day"));

  return (
    <div className={`border p-2 min-h-[80px] ${isToday ? "bg-yellow-100 border-yellow-500" : ""}`}>
      <div className="font-bold text-sm">{date?.date()}</div>
      {dayEvents.map((event, idx) => (
        <div key={idx} className="mt-1 text-xs bg-blue-100 text-blue-800 p-1 rounded">
          {event.time} - {event.title}
        </div>
      ))}
    </div>
  );
};

export default DayCell;

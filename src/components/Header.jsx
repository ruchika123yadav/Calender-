import React from "react";

const Header = ({ month, year, onPrev, onNext }) => {
  const monthName = new Date(year, month - 1).toLocaleString("default", { month: "long" });

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={onPrev} className="px-3 py-1 bg-blue-600 text-white rounded">Prev</button>
      <h2 className="text-xl font-semibold">{monthName} {year}</h2>
      <button onClick={onNext} className="px-3 py-1 bg-blue-600 text-white rounded">Next</button>
    </div>
  );
};

export default Header;

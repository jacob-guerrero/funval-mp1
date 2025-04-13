import React from "react";

export default function GuestOption({
  title,
  description,
  count,
  handleClickBtns,
}) {
  return (
    <li className="flex flex-col">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="mt-2 flex gap-4">
        <button
          id={title === "Adults" ? "decAdultBtn" : "decChildrenBtn"}
          className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
          onClick={handleClickBtns}
        >
          -
        </button>
        <p className="font-bold">{count}</p>
        <button
          id={title === "Adults" ? "incAdultBtn" : "incChildrenBtn"}
          className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
          onClick={handleClickBtns}
        >
          +
        </button>
      </div>
    </li>
  );
}

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Form({
  location,
  setActiveOption,
  handleSubmit,
  setLocation,
}) {
  const { countAdult, countChildren } = useContext(AppContext);
  const guestCount =
    countAdult + countChildren === 0
      ? ""
      : `${countAdult + countChildren} guests`;

  const toggleOptions = (e) => {
    const btnClicked = e.target.id;
    if (btnClicked === "location") {
      setActiveOption("location");
    } else if (btnClicked === "guest") {
      setActiveOption("guest");
    }
  };
  const handleInput = (e) => {
    const textValue = e.target.value;
    setLocation(textValue);
  };

  return (
    <form id="contactForm" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col border-1 border-gray-300 rounded-2xl shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)] divide-y-1 divide-gray-300 lg:flex-row lg:divide-x-1 lg:divide-y-0 lg:justify-between">
        <div className="py-2 px-4 flex flex-col lg:flex-1">
          <label htmlFor="location" className="font-semibold">
            LOCATION
          </label>
          <input
            type="search"
            id="location"
            name="location"
            placeholder="Add location"
            className="px-1"
            onClick={toggleOptions}
            value={location}
            onInput={handleInput}
          />
        </div>
        <div className="py-2 px-4 flex flex-col lg:flex-1 border-b-0">
          <label htmlFor="guest" className="font-semibold hover:cursor-pointer">
            GUESTS
          </label>
          <input
            type="text"
            id="guest"
            name="guest"
            placeholder="Add guests"
            className="px-1 focus:outline-none hover:cursor-pointer"
            onClick={toggleOptions}
            value={guestCount}
            readOnly
          />
        </div>

        <div className="py-2 px-4 justify-center items-center hidden lg:flex lg:flex-1">
          <button
            id="search-btn"
            type="submit"
            form="contactForm"
            className="w-max py-2 px-4 flex gap-2 bg-[#eb5757] rounded-xl text-white hover:cursor-pointer"
          >
            <img src="/icons/search-white.svg" alt="search" className="w-6" />
            <p>Search</p>
          </button>
        </div>
      </div>
    </form>
  );
}

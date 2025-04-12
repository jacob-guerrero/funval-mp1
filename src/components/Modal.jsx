import { useEffect, useState } from "react";
import LocationOption from "./LocationOption";

export default function Modal({ toggleView, modalView, response }) {
  const [activeOption, setActiveOption] = useState("");
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState([]);
  const activeOptionGuest = activeOption === "guest" ? "" : "hidden";
  const activeOptionLocation = activeOption === "location" ? "" : "hidden";

  const toggleOptions = (e) => {
    const btnClicked = e.target.id;
    if (btnClicked === "location") {
      setActiveOption("location");
    } else if (btnClicked === "guest") {
      setActiveOption("guest");
    }
  };

  const filterLocationInput = (arr, inputText) => {
    const filteredOpts = arr?.filter(({ city }) => {
      const cityLower = city.toLowerCase();
      const inputLower = inputText.toLowerCase();
      return cityLower.includes(inputLower);
    });
    setLocations(filteredOpts);
  };
  const handleInput = (e) => {
    const textValue = e.target.value;
    setInput(textValue);
  };

  useEffect(() => {
    if (!input.trim() || input === "") {
      setLocations([]);
      return;
    }
    filterLocationInput(response, input.trim());
  }, [response, input]);

  return (
    <div
      id="modal"
      className={`modal w-full h-full fixed flex justify-center top-0 md:p-5 bg-gray-600/50 ${
        modalView ? "" : "hidden"
      }`}
    >
      <div className="modal-content w-full h-4/5 max-w-5xl p-4 relative flex flex-col gap-4 bg-white md:rounded-lg">
        <div className="flex justify-between font-semibold">
          <p>Edit your search</p>
          <button className="close hover:cursor-pointer" onClick={toggleView}>
            <img src="/icons/close.svg" alt="close" className="w-6" />
          </button>
        </div>
        <form id="contactForm">
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
                onInput={handleInput}
                value={input}
              />
            </div>
            <div className="py-2 px-4 flex flex-col lg:flex-1 border-b-0">
              <label
                htmlFor="guest"
                className="font-semibold hover:cursor-pointer"
              >
                GUESTS
              </label>
              <input
                type="text"
                id="guest"
                name="guest"
                placeholder="Add guests"
                className="px-1 focus:outline-none hover:cursor-pointer"
                onClick={toggleOptions}
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
                <img
                  src="/icons/search-white.svg"
                  alt="search"
                  className="w-6"
                />
                <p>Search</p>
              </button>
            </div>
          </div>
        </form>

        <div className="options lg:flex">
          <ul
            className={`option-locations flex flex-col py-2 px-4 gap-2 ${
              modalView ? "" : "hidden"
            } ${activeOptionLocation}`}
          >
            {
              locations?.map((location) => (
                <LocationOption location={location} key={location.id} />
              ))}
          </ul>

          <ul
            className={`option-guests mx-[calc(100%/3)] flex flex-col py-2 px-4 gap-6 ${activeOptionGuest}`}
          >
            <li className="flex flex-col">
              <h3 className="font-semibold">Adults</h3>
              <p className="text-gray-500">Ages 13 or above</p>
              <div className="mt-2 flex gap-4">
                <button
                  id="decAdultBtn"
                  className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  -
                </button>
                <p id="adultCount" className="font-bold">
                  0
                </p>
                <button
                  id="incAdultBtn"
                  className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  +
                </button>
              </div>
            </li>

            <li className="flex flex-col">
              <h3 className="font-semibold">Children</h3>
              <p className="text-gray-500">Ages 13 or below</p>
              <div className="mt-2 flex gap-4">
                <button
                  id="decChildrenBtn"
                  className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  -
                </button>
                <p id="childrenCount" className="font-bold">
                  0
                </p>
                <button
                  id="incChildrenBtn"
                  className="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  +
                </button>
              </div>
            </li>
          </ul>
        </div>

        <button
          id="search-btn"
          type="submit"
          form="contactForm"
          className="w-max mt-auto py-2 px-4 self-center flex gap-2 bg-[#eb5757] rounded-xl text-white hover:cursor-pointer lg:hidden"
        >
          <img src="/icons/search-white.svg" alt="search" className="w-6" />
          <p>Search</p>
        </button>
      </div>
    </div>
  );
}

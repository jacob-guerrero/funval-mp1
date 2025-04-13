import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import LocationOption from "./LocationOption";
import GuestOption from "./GuestOption";
import Form from "./Form";

export default function Modal({
  response,
  handleSubmit,
  location,
  setLocation,
  toggleView,
  modalView,
}) {
  const { countAdult, countChildren, setCountAdult, setCountChildren } =
    useContext(AppContext);
  const [activeOption, setActiveOption] = useState("");
  const [locations, setLocations] = useState([]);

  const activeOptionGuest = activeOption === "guest" ? "" : "hidden";
  const activeOptionLocation = activeOption === "location" ? "" : "hidden";

  const filterLocationInput = (arr, inputText) => {
    const filteredOpts = arr?.filter(({ city }) => {
      const cityLower = city.toLowerCase();
      const inputLower = inputText.toLowerCase();
      return cityLower.includes(inputLower);
    });
    setLocations(filteredOpts);
  };

  function handleClickBtns(e) {
    const btnClicked = e.target.id;

    // Validate numbers (no negative)
    if (btnClicked === "decAdultBtn" && countAdult === 0) return;
    if (btnClicked === "decChildrenBtn" && countChildren === 0) return;

    switch (btnClicked) {
      case "decAdultBtn":
        setCountAdult((prev) => prev - 1);
        break;

      case "incAdultBtn":
        setCountAdult((prev) => prev + 1);
        break;

      case "decChildrenBtn":
        setCountChildren((prev) => prev - 1);
        break;

      case "incChildrenBtn":
        setCountChildren((prev) => prev + 1);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (!location.trim() || location === "") {
      setLocations([]);
      return;
    }
    filterLocationInput(response, location.trim());
  }, [response, location]);

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
        <Form
          location={location}
          setActiveOption={setActiveOption}
          handleSubmit={handleSubmit}
          setLocation={setLocation}
        />

        <div className="options lg:flex">
          <ul
            className={`option-locations flex flex-col py-2 px-4 gap-2 ${
              modalView ? "" : "hidden"
            } ${activeOptionLocation}`}
          >
            {locations?.map((location) => (
              <LocationOption
                key={location.id}
                location={location}
                setLocation={setLocation}
              />
            ))}
          </ul>

          <ul
            className={`option-guests mx-[calc(100%/3)] flex flex-col py-2 px-4 gap-6 ${activeOptionGuest}`}
          >
            <GuestOption
              title="Adults"
              description="Ages 13 or above"
              count={countAdult}
              handleClickBtns={(e) => handleClickBtns(e)}
            />
            <GuestOption
              title="Children"
              description="Ages 13 or below"
              count={countChildren}
              handleClickBtns={(e) => handleClickBtns(e)}
            />
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

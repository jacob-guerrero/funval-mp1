import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SearchMenu from "./SearchMenu";

export default function Header({ toggleView, location }) {
  const { countAdult, countChildren } = useContext(AppContext);

  const guestCount =
    countAdult + countChildren === 0
      ? "Add guests"
      : `${countAdult + countChildren} guests`;
  const locationValue = location.trim() === "" ? "Add location" : location;

  return (
    <header className="flex justify-center p-2 md:p-5">
      <div className="w-full max-w-5xl gap-4 flex flex-col md:flex-row md:justify-between">
        <div className="flex justify-center items-center">
          <img src="/icons/logo-f7862584.svg" alt="logo" className="w-42" />
        </div>

        <SearchMenu
          toggleView={toggleView}
          guestCount={guestCount}
          locationValue={locationValue}
        />
      </div>
    </header>
  );
}

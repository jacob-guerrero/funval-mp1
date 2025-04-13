export default function SearchMenu({ toggleView, guestCount, locationValue }) {
  return (
    <div
      id="search-menu"
      className="w-full max-w-sm self-center grid grid-cols-[2fr_2fr_1fr] hover:cursor-pointer border-1 border-gray-300 rounded-2xl divide-x-1 divide-gray-300 shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)]"
      onClick={toggleView}
    >
      <button
        id="search-location-btn"
        className="w-full px-2 py-4 text-center text-gray-400 hover:cursor-pointer"
      >
        {locationValue}
      </button>
      <button
        id="search-guest-btn"
        className="w-full px-2 py-4 text-center text-gray-400 hover:cursor-pointer"
      >
        {guestCount}
      </button>
      <button className="w-full px-2 py-4 flex justify-center items-center hover:cursor-pointer">
        <img src="/icons/search.svg" alt="search" className="w-6" />
      </button>
    </div>
  );
}

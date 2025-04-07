export default function Header() {
  return (
    <header class="flex justify-center p-2 md:p-5">
      <div class="w-full max-w-5xl gap-4 flex flex-col md:flex-row md:justify-between">
        <div class="flex justify-center items-center">
          <img src="/icons/logo-f7862584.svg" alt="logo" class="w-42" />
        </div>
        <div
          id="search-menu"
          class="w-full max-w-sm self-center grid grid-cols-[2fr_2fr_1fr] hover:cursor-pointer border-1 border-gray-300 rounded-2xl divide-x-1 divide-gray-300 shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)]"
        >
          <button
            id="search-location-btn"
            class="w-full px-2 py-4 text-center text-gray-400 hover:cursor-pointer"
          >
            Add location
          </button>
          <button
            id="search-guest-btn"
            class="w-full px-2 py-4 text-center text-gray-400 hover:cursor-pointer"
          >
            Add guest
          </button>
          <button class="w-full px-2 py-4 flex justify-center items-center hover:cursor-pointer">
            <img src="/icons/search.svg" alt="search" class="w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

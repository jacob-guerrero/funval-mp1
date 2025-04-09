export default function Modal() {
  return (
    <div
      id="modal"
      class="modal w-full h-full fixed flex justify-center top-0 md:p-5 bg-gray-600/50 hidden"
    >
      <div class="modal-content w-full h-4/5 max-w-5xl p-4 relative flex flex-col gap-4 bg-white md:rounded-lg">
        <div class="flex justify-between font-semibold">
          <p>Edit your search</p>
          <button class="close hover:cursor-pointer">
            <img src="/icons/close.svg" alt="close" class="w-6" />
          </button>
        </div>
        <form id="contactForm">
          <div class="flex flex-col border-1 border-gray-300 rounded-2xl shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)] divide-y-1 divide-gray-300 lg:flex-row lg:divide-x-1 lg:divide-y-0 lg:justify-between">
            <div class="py-2 px-4 flex flex-col lg:flex-1">
              <label for="location" class="font-semibold">
                LOCATION
              </label>
              <input
                type="search"
                id="location"
                name="location"
                placeholder="Add location"
                class="px-1"
              />
            </div>
            <div class="py-2 px-4 flex flex-col lg:flex-1 border-b-0">
              <label for="guest" class="font-semibold hover:cursor-pointer">
                GUESTS
              </label>
              <input
                type="text"
                id="guest"
                name="guest"
                placeholder="Add guests"
                class="px-1 focus:outline-none hover:cursor-pointer"
                readonly
              />
            </div>

            <div class="py-2 px-4 justify-center items-center hidden lg:flex lg:flex-1">
              <button
                id="search-btn"
                type="submit"
                form="contactForm"
                class="w-max py-2 px-4 flex gap-2 bg-[#eb5757] rounded-xl text-white hover:cursor-pointer"
              >
                <img
                  src="/icons/search-white.svg"
                  alt="search"
                  class="w-6"
                />
                <p>Search</p>
              </button>
            </div>
          </div>
        </form>

        <div class="options lg:flex">
          <ul class="option-locations flex flex-col py-2 px-4 gap-2 hidden"></ul>

          <ul class="option-guests mx-[calc(100%/3)] flex flex-col py-2 px-4 gap-6 hidden">
            <li class="flex flex-col">
              <h3 class="font-semibold">Adults</h3>
              <p class="text-gray-500">Ages 13 or above</p>
              <div class="mt-2 flex gap-4">
                <button
                  id="decAdultBtn"
                  class="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  -
                </button>
                <p id="adultCount" class="font-bold">
                  0
                </p>
                <button
                  id="incAdultBtn"
                  class="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  +
                </button>
              </div>
            </li>

            <li class="flex flex-col">
              <h3 class="font-semibold">Children</h3>
              <p class="text-gray-500">Ages 13 or below</p>
              <div class="mt-2 flex gap-4">
                <button
                  id="decChildrenBtn"
                  class="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
                >
                  -
                </button>
                <p id="childrenCount" class="font-bold">
                  0
                </p>
                <button
                  id="incChildrenBtn"
                  class="w-6 h-6 flex justify-center items-center border-1 border-slate-900 rounded-sm"
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
          class="w-max mt-auto py-2 px-4 self-center flex gap-2 bg-[#eb5757] rounded-xl text-white hover:cursor-pointer lg:hidden"
        >
          <img
            src="/icons/search-white.svg"
            alt="search"
            class="w-6"
          />
          <p>Search</p>
        </button>
      </div>
    </div>
  );
}

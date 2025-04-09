export default function Stay({ item }) {
  const { photo, superHost, type, beds, rating, title } = item;
  const isSuperHost = superHost ? "" : "hidden";
  const isNotNull = Number.isInteger(beds) ? "" : "hidden";

  return (
    <li className="flex flex-col gap-1">
      <img src={photo} alt="stay photo" className="aspect-[4/3] rounded-2xl" />

      <div className="flex justify-between items-center text-gray-500">
        <div className="flex gap-1 text-xs sm:gap-3 sm:text-sm">
          <p
            className={`py-1 px-2 text-[10px] flex justify-center items-center border-1 border-gray-800 rounded-xl font-semibold text-gray-800 sm:text-xs ${isSuperHost}`}
          >
            SUPERHOST
          </p>
          <div className="flex items-center gap-1 sm:text-sm">
            <p>{type}</p>
            <p className={isNotNull}>-</p>
            <p className={isNotNull}>{beds} beds</p>
          </div>
        </div>

        <div className="flex gap-1 items-center text-sm">
          <img src="/icons/star.svg" alt="star" className="w-6" />
          <p>{rating}</p>
        </div>
      </div>

      <p className="font-semibold">{title}</p>
    </li>
  );
}

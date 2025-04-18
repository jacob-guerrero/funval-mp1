export default function LocationOption({ location, setLocation }) {
  const { city, country } = location;
  const handleSelection = () => {
    setLocation(`${city}, ${country}`);
  };

  return (
    <li
      className="w-max flex gap-1 text-gray-500 hover:cursor-pointer"
      onClick={handleSelection}
    >
      <img src="/icons/location.svg" alt="location" className="w-6" />
      <p>
        {city}, {country}
      </p>
    </li>
  );
}

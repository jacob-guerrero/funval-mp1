export default function LocationOption({ location }) {
  const { city, country } = location;
  return (
    <li className="w-max flex gap-1 text-gray-500 hover:cursor-pointer">
      <img src="/icons/location.svg" alt="location" className="w-6" />
      <p>
        {city}, {country}
      </p>
    </li>
  );
}

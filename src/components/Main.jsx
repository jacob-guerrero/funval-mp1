import Stay from "./Stay";

export default function Main({ loading, response, location }) {
  const responseNum = response?.length > 12 ? "12+" : response?.length || 0;
  const locationCountry = location.split(", ")[1];
  const staysCountry = locationCountry
    ? `Stays in ${locationCountry}`
    : "Stays";

  return (
    <main className="px-2 py-5 flex flex-col gap-6 items-center md:p-5">
      <div className="w-full max-w-5xl flex justify-between items-center">
        <h2 id="stays-title" className="text-2xl font-bold">
          {staysCountry}
        </h2>
        <p>
          <span className="stays-number">{responseNum}</span> stays
        </p>
      </div>

      <ul
        id="stays-container"
        className="w-full max-w-5xl grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4"
      >
        {!loading
          ? response?.map((item) => {
              return <Stay item={item} key={item.id} />;
            })
          : ""}
      </ul>
    </main>
  );
}

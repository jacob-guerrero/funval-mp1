import useData from "../hooks/useData";
import Stay from "./Stay";

export default function Main() {
  const { loading, response, error } = useData("/data/stays.json");

  return (
    <main className="px-2 py-5 flex flex-col gap-6 items-center md:p-5">
      <div className="w-full max-w-5xl flex justify-between items-center">
        <h2 id="stays-title" className="text-2xl font-bold">
          Stays
        </h2>
        <p>
          <span className="stays-number">0</span> stays
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

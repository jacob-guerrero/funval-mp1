export default function Main() {
  return (
    <main class="px-2 py-5 flex flex-col gap-6 items-center md:p-5">
      <div class="w-full max-w-5xl flex justify-between items-center">
        <h2 id="stays-title" class="text-2xl font-bold">
          Stays
        </h2>
        <p>
          <span class="stays-number">0</span> stays
        </p>
      </div>

      <ul
        id="stays-container"
        class="w-full max-w-5xl grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4"
      ></ul>
    </main>
  );
}

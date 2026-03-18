import "./App.css";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const setDarkMode = useDarkMode();

  return (
    <section className="grid place-items-center gap-8 min-h-screen bg-gray-200 dark:bg-gray-800">
      <form className="bg-gray-800 dark:bg-gray-200 flex flex-col gap-4 border border-gray-800  p-6 rounded">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button
          type="button"
          className="border-none w-fit px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 dark:text-white text-slate-800 cursor-pointer"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-gray-200 dark:bg-gray-800 dark:text-white text-slate-800 cursor-pointer"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Dark theme
        </button>
      </form>
    </section>
  );
}

export default App;

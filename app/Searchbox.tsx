import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Searchbox() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-4">Find your place</h1>
      <form className="flex justify-center flex-1">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative min-w-[300px] cursor-pointer">
          <MapPinIcon className="absolute h-6 top-2 left-4" />
          <input
            type="search"
            id="default-search"
            className="block w-full h-4 p-5 pl-12 text-base text-gray-900 border border-main-gray rounded-full bg-gray-50 outline-main-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Location"
            required
          />
        </div>
      </form>
    </div>
  );
}

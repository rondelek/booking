"use client";

import { ChangeEvent, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Searchbox() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold py-4">Find your place</h1>
      <form className="flex justify-center flex-1">
        <label htmlFor="default-search" className="sr-only dark:text-white">
          Search
        </label>
        <div className="relative min-w-[300px] cursor-pointer">
          <MapPinIcon className="absolute h-6 top-2 left-4" />
          <input
            type="search"
            id="default-search"
            value={searchInput}
            onChange={handleSearch}
            className="block w-full h-4 p-5 pl-12 border border-main-gray rounded-full outline-red-dark dark:text-white"
            placeholder="Location"
            required
          />
        </div>
      </form>
      <button type="button" className="w-[300px] btn-red">
        Search
      </button>
    </div>
  );
}

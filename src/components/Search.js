import React from "react";
import { VscSearch } from "react-icons/vsc";

export default function Search() {
  return (
    <div className="pt-3">
      <div className="flex justify-center relative mx-auto lg:w-9/12 md:w-8/12 sm:w-full">
        <div className="absolute left-0 bottom-0 top-0 flex flex-col justify-center items-center px-5">
          <span>
            <VscSearch />
          </span>
        </div>
        <input
          type="text"
          className=" bg-gray-100 w-full p-3 px-14 rounded-lg focus:border-red-600"
          placeholder="Search . . ."
        />
      </div>
    </div>
  );
}

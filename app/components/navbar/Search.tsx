"use client";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className=" border-[1px] w-full md:w-auto rounded-full py-2 shadow-sm transition hover:shadow-md cursor-pointer ">
      <div className="flex items-center justify-between ">
        <div className="text-sm font-semibold px-6">AnyWhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px]  flex-1 text-center">
          Any week
        </div>
        <div className="text-sm  text-gray-600 flex items-center pl-6 pr-2 gap-3 ">
          <div className="hidden sm:block">Add guests</div>
          <div className="bg-rose-500 p-2 text-white rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

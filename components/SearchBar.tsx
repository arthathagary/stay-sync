import React from 'react'
import { Input } from './ui/input'
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

const SearchBar = () => {
  return (
    <div
    className="
      border-[1px] 
      w-full 
      md:w-auto 
      py-2 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    "
  >
    <div 
      className="
        flex 
        flex-row 
        items-center 
        justify-between
      "
    >
      <div 
        className="
          text-sm 
          font-semibold 
          px-6
        "
      >
        locationLabel
      </div>
      <div 
        className="
          hidden 
          sm:block 
          text-sm 
          font-semibold 
          px-6 
          border-x-[1px] 
          flex-1 
          text-center
        "
      >
        durationLabel
      </div>
      <div 
        className="
          text-sm 
          pl-6 
          pr-2 
          text-gray-600 
          flex 
          flex-row 
          items-center 
          gap-3
        "
      >
        <div className="hidden sm:block">guestLabel</div>
        <div 
          className="
            p-2 
            bg-white
            rounded-full 
            text-white
          "
        >
          <BiSearch  size={18} style={{ color: 'black' }}  />
        </div>
      </div>
    </div>
  </div>
);
}

export default SearchBar
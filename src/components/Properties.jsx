import { useState } from 'react';
import { BiSolidSquareRounded } from 'react-icons/bi';
import { BiSquareRounded } from 'react-icons/bi';

function Property({ title }) {
  const [isSelected, setSelected] = useState(false);

  function toggleSelect() {
    setSelected((prev) => !prev);
  }

  return (
    <div className="flex gap-2.5">
      {isSelected ? (
        <BiSolidSquareRounded
          onClick={toggleSelect}
          className="cursor-pointer text-main-color"
        />
      ) : (
        <BiSquareRounded
          onClick={toggleSelect}
          className="cursor-pointer text-main-color"
        />
      )}
      <p className="text-[11px]">{title}</p>
    </div>
  );
}

export default function Properties() {
  return (
    <div className="absolute p-2.5 shadow rounded-md top-10 right-10 w-[410px] h-[110px] bg-white">
      <p className="text-[11px] pb-1 pl-2.5 border-[#E0E7F1] border-b">
        View Properties
      </p>
      <div className="flex justify-around py-2.5">
        <div className="flex flex-col gap-1">
          <Property title="Total sales" />
          <Property title="Total transaction" />
          <Property title="Total value" />
        </div>
        <div className="flex flex-col gap-1">
          <Property title="Max transaction count per hour" />
          <Property title="Max transaction count date-time" />
          <Property title="Compressor status" />
        </div>
      </div>
    </div>
  );
}

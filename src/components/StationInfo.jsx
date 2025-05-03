import BusActiveImage from '../../public/gas-station-svgrepo-com (1).svg';
import BusNotActiveImage from '../../public/gas-station-svgrepo-com (2).svg';
import { BsThreeDots } from 'react-icons/bs';
import Properties from './Properties';
import { useState } from 'react';

function TowFelids({ first, second }) {
  return (
    <div className="flex gap-15 text-text-color text-[12px] ">
      <p className="font-semibold mb-5">{first}</p>
      <p>{second}</p>
    </div>
  );
}

export default function StationInfo({ isActive = true }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalHandler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <article className="bg-white w-[1155px] h-[193px] rounded-[30px] p-5">
      <div className="relative flex items-center border-b-1 border-[#E0E7F1] pb-1 gap-2.5 text-text-color">
        <div className="mt-auto mb-1">
          <div
            className={`${
              isActive ? 'bg-main-color' : 'bg-[#B9CDE2]'
            } rounded-full w-2.5 h-2.5 `}
          ></div>
        </div>
        {isActive ? (
          <img src={BusActiveImage} alt="bus image" />
        ) : (
          <img src={BusNotActiveImage} alt="bus image" />
        )}
        <p className="absolute top-2 left-22 font-semibold">
          STATION NAME
          <br />
          DUMMY
        </p>
        <div className="ms-auto me-5">
          <BsThreeDots
            onClick={toggleModalHandler}
            className="cursor-pointer"
          />
          {isOpen && <Properties />}
        </div>
      </div>
      <div className="flex justify-between mt-5 px-5">
        <div className="flex flex-col gap-5">
          <TowFelids
            first="Total Sales"
            second={
              <>
                62,721 m<sup>3</sup>
              </>
            }
          />
          <TowFelids first="Total Value" second="550 EGP" />
        </div>
        <div className="flex flex-col gap-5">
          <TowFelids first="Compression State" second="Compression" />
          <TowFelids
            first={
              <>
                Total Transaction <br />
                Count
              </>
            }
            second="5161"
          />
        </div>
        <div className="flex flex-col gap-5">
          <TowFelids first="Max Transaction / hour" second="20" />
          <TowFelids
            first="Max Transaction Date-Time"
            second={
              <>
                8-1-2021 <span className="font-semibold">|</span> 10:16 PM
              </>
            }
          />
        </div>
      </div>
    </article>
  );
}

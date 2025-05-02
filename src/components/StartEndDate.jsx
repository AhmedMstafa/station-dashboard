import DateTime from './DateTime';
import { IoTriangleSharp } from 'react-icons/io5';
import { FaSquareFull } from 'react-icons/fa';

export default function StartEndDate({ isStartDate, label }) {
  return (
    <div className="flex items-center gap-2.5">
      {isStartDate ? (
        <IoTriangleSharp className="text-main-color rotate-90" />
      ) : (
        <FaSquareFull className="text-main-color" />
      )}
      <DateTime label={label} />
    </div>
  );
}

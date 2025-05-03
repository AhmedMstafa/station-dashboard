import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';

export default function CardData({
  isActive,
  number,
  tag,
  title,
  isUp,
  subTag,
}) {
  return (
    <article
      className={`${
        isActive ? 'bg-secondary-color' : 'bg-white'
      } cursor-pointer center-elements hover:bg-secondary-color transition w-[269px] h-[163px] rounded-[24px] text-text-color`}
    >
      <div>
        <div className="flex items-center gap-1">
          <span className="text-[40px]">{number}</span>
          <span className="text-[22px] ">{tag}</span>
        </div>
        <p className="text-[17px] font-semibold capitalize">{title}</p>
        <div
          className={`${
            isUp ? 'text-special-green' : 'text-main-color'
          } flex items-center`}
        >
          {isUp ? (
            <GoTriangleUp className="text-[20px]" />
          ) : (
            <GoTriangleDown className="text-[20px]" />
          )}
          {subTag}
        </div>
      </div>
    </article>
  );
}

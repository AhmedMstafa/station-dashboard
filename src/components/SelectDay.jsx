function Day({ children, isSelected }) {
  return (
    <div
      className={`${
        isSelected
          ? 'text-white bg-main-color'
          : 'text-text-color hover:bg-main-color hover:text-white transition'
      }
    center-elements  w-[133px] h-[42px] text-[14px] cursor-pointer rounded-[30px] uppercase`}
    >
      {children}
    </div>
  );
}

export default function SelectDay() {
  return (
    <div className="flex justify-between bg-section-color w-[472px] h[44px] rounded-[30px]">
      <Day isSelected>today</Day>
      <Day>yesterday</Day>
      <Day>last week</Day>
    </div>
  );
}

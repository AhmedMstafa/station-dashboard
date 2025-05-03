import Bar from './Bar';

function Topic({ title, subTitle }) {
  return (
    <span className="hover:text-main-color border-b-2 border-b-transparent hover:border-b-2 hover:border-main-color transition cursor-pointer">
      {title}
      <br />
      {subTitle}
    </span>
  );
}

export default function StationOverview() {
  return (
    <div className=" w-[1200px] h-[407px] bg-white rounded-[30px] p-10">
      <div className="flex  justify-between font-medium text-text-color border-b border-[#E0E7F1]">
        <p className="text-[12px]  font-medium">STATIONS ACTIVATES OVERVIEW</p>
        <div className="flex gap-5">
          <Topic title="SALES" />
          <Topic title="TRANSACTION" subTitle="N" />
          <Topic title="VALUE" subTitle="E" />
          <Topic title="COMPRESSION" />
        </div>
      </div>
      <Bar />
    </div>
  );
}

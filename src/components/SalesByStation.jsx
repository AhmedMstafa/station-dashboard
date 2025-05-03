import gasStation from '../../public/gas-station-svgrepo-com.svg';

function StationSales({ isActive = true, title, subTitle }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <img src={gasStation} className="grow-0" />
        <p>{title}</p>
        <p className={`${isActive ? '' : 'text-[#B9CDE2]'}`}>{subTitle}</p>
      </div>
      {isActive ? (
        <span className="relative w-[257px] h-[6px] rounded-md bg-secondary-color">
          <span
            className={`absolute left-0 rounded-md bg-main-color h-full w-[50%]`}
          ></span>
        </span>
      ) : (
        <span className="w-[257px] h-[6px] rounded-md bg-[#B9CDE2]"></span>
      )}
    </div>
  );
}

export default function SalesByStation() {
  return (
    <section className="text-center text-text-color ">
      <h1 className="text-[20px] mb-10 font-bold">Sales by Station</h1>
      <div className="w-[350px] flex flex-col items-center gap-10 font-semibold">
        <StationSales
          title="Station Name"
          subTitle={
            <>
              62,721m<sup>3</sup>
            </>
          }
          percentage={50}
        />
        <StationSales
          title="Station Name"
          subTitle={
            <>
              62,721m<sup>3</sup>
            </>
          }
          percentage={50}
        />
        <StationSales isActive={false} title="Station Name" subTitle="NM" />
      </div>
    </section>
  );
}

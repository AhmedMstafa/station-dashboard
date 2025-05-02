import Radar from './Radar';
export default function HourlySales() {
  return (
    <section className="border text-center text-text-color font-bold">
      <h1>Hourly Sales</h1>
      <div className="w-[350px] h-[350px]">
        <Radar />
      </div>
    </section>
  );
}

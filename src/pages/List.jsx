import StationInfo from '../components/StationInfo';

export default function List() {
  return (
    <section className="flex flex-col gap-5 px-5 max-h-[400px] overflow-auto">
      <StationInfo />
      <StationInfo />
      <StationInfo isActive={false} />
    </section>
  );
}

import { Outlet } from 'react-router-dom';
import CardDataWrapper from '../components/CardDataWrapper';
import HourlySales from '../components/HourlySales';
import DashControl from '../components/DashControl';

export default function Dashboard() {
  return (
    <main className="flex flex-wrap gap-10 bg-section-color w-full h-full pt-[78px] pl-[92px]">
      <div className="flex flex-col gap-10">
        <CardDataWrapper />
        <DashControl />
        <Outlet />
      </div>
      <div>
        <HourlySales />
      </div>
    </main>
  );
}

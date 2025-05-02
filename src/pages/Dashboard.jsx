import { Outlet } from 'react-router-dom';
import CardDataWrapper from '../components/CardDataWrapper';
import HourlySales from '../components/HourlySales';

export default function Dashboard() {
  return (
    <main className="flex flex-wrap gap-10 bg-section-color w-full h-full pt-[78px] pl-[92px]">
      <div>
        <CardDataWrapper />
        <Outlet />
      </div>
      <div>
        <HourlySales />
      </div>
    </main>
  );
}

import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-section-color">
      <SideBar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

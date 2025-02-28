import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div className="relative flex h-screen">
      <SideBar />
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

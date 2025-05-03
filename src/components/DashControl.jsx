import { TbChartBarPopular } from 'react-icons/tb';
import { LuStretchHorizontal } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomButton({ title, icon, active, path }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center justify-center gap-2.5 w-[147px] rounded-[30px] transition font-semibold cursor-pointer
      ${
        active
          ? 'bg-main-color text-white'
          : 'text-text-color hover:bg-main-color hover:text-white'
      }`}
    >
      {icon} {title}
    </button>
  );
}

export default function DashControl() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex justify-between ml-auto w-[310px] h-[44px] rounded-[30px] bg-white">
      <CustomButton
        icon={<TbChartBarPopular />}
        title="GRAPH"
        path="/dashboard/graph"
        active={currentPath === '/dashboard/graph'}
      />
      <CustomButton
        icon={<LuStretchHorizontal />}
        title="LIST"
        path="/dashboard/list"
        active={currentPath === '/dashboard/list'}
      />
    </div>
  );
}

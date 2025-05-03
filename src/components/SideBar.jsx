import { NavLink } from 'react-router-dom';

import { IoWater } from 'react-icons/io5';
import { MdSpeed } from 'react-icons/md';
import { BiSolidDashboard } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';
import { TbSettings } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';

const style = { width: '100%', height: '100%' };

const links = [
  {
    icon: <IoWater {...{ style }} />,
    path: '/pms',
  },
  {
    icon: <MdSpeed {...{ style }} />,
    path: '/controlRoom',
  },
  {
    icon: <BiSolidDashboard {...{ style }} />,
    path: '/dashboard',
  },
  {
    icon: <FiLayers {...{ style }} />,
    path: '/elements',
  },
  { name: 'settings', icon: <TbSettings {...{ style }} />, path: '/settings' },
  {
    icon: <IoNotificationsOutline {...{ style }} />,
    path: '/notifications',
  },
  { icon: <TbLogout {...{ style }} />, path: '/logout' },
];

export default function SideBar() {
  return (
    <nav className="h-screen bg-main-color w-[115px] rounded-br-[30px] rounded-tr-[30px]">
      <ul className="h-full flex flex-col justify-center items-center gap-[30px]">
        {links.map((link, index) => {
          let liClasses = !index
            ? 'mb-auto mt-[50px]'
            : index === links.length - 1
            ? 'mt-auto mb-[50px]'
            : '';
          let navLinkClasses = !index
            ? 'w-[64px] h-[64px]'
            : 'w-[40px] h-[40px]';

          return (
            <li key={link.path} className={liClasses}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${navLinkClasses} center-elements text-white`
                    : `${navLinkClasses} center-elements text-secondary-color hover:text-white`
                }
              >
                {link.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

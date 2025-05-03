import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Graph from './pages/Graph';
import List from './pages/List';
import Pms from './pages/Pms';
import ControlRoom from './pages/ControlRoom';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Logout from './pages/logout';
import Element from './pages/Elements';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard/graph" replace />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              { path: 'graph', element: <Graph /> },
              { path: 'list', element: <List /> },
            ],
          },
          { path: 'pms', element: <Pms /> },
          { path: 'controlRoom', element: <ControlRoom /> },
          { path: 'settings', element: <Settings /> },
          { path: 'elements', element: <Element /> },
          { path: 'notifications', element: <Notifications /> },
          { path: 'logout', element: <Logout /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Graph from './pages/Graph';
import List from './pages/List';
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
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              { path: 'graph', element: <Graph /> },
              { path: 'list', element: <List /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

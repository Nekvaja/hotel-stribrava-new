import { createRoot } from 'react-dom/client';
import { Homepage } from './pages/Homepage/Homepage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminPage } from './pages/AdminPage/AdminPage';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Homepage/>,
  },
  {
    path: '/admin',
    element: <AdminPage/>
  }

]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);

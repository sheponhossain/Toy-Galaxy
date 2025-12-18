import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Root/Root.jsx';
import HomeLayOut from './LayOut/HomeLayOut.jsx';
import ToyDetails from './Components/ToyDetails.jsx';
import Login from './Pages/Login.jsx';
import AuthLayOut from './Routes/AuthLayOut.jsx';
import Register from './Pages/Register.jsx';
import NotFound from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeLayOut />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/toys/:id',
        element: <ToyDetails />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

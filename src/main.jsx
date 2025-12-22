import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Root/Root.jsx';
import HomeLayOut from './LayOut/HomeLayOut.jsx';
import ToyDetails from './Components/ToyDetails.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import NotFound from './Pages/NotFound.jsx';
import Profile from './Pages/Profile.jsx';
import AuthProvider from './Routes/AuthProvider.jsx';
import PrivateRoute from './PrivetRoutes/PrivateRoutes.jsx';
import AddToy from './Pages/AddToy.jsx';
import PupolarToyDetails from './Components/PupolartoyDetails.jsx';
import AllToys from './Components/AllToys.jsx';

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
        path: '/add-toy',
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/popular-toy-details/:id',
        element: (
          <PrivateRoute>
            <PupolarToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/toys/:id',
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'all-toys',
        element: <AllToys />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

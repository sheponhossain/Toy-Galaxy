import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Navbar from './Components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        // element:
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

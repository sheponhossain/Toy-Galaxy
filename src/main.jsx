import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Footer from './Components/Footer.jsx';
import Root from './Root/Root.jsx';
import HomeLayOut from './LayOut/HomeLayOut.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeLayOut />,
      },
    ],
  },
  {
    path: '/Footer',
    element: <Footer />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

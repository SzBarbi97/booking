import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HotelPage } from '../pages/HotelPage/HotelPage';

export const router = createBrowserRouter([
  {
    path: '/hotels',
    element: <HotelPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/hotels'} />,
  },
]);

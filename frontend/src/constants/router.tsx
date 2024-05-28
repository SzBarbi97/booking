import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HotelDetailPage } from '../pages/HotelDetailPage/HotelDetailPage';
import { HotelPage } from '../pages/HotelPage/HotelPage';

export const router = createBrowserRouter([
  {
    path: '/hotels',
    element: <HotelPage />,
  },
  {
    path: '/hotels/:hotelId',
    element: <HotelDetailPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/hotels'} />,
  },
]);

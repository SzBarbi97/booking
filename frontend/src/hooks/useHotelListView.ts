import React, { useState } from 'react';
import Cookies from 'js-cookie';

export function useHotelListView(): [string, (event: React.MouseEvent<HTMLElement>, newView: string | null) => void] {
  const [view, setView] = useState<string>(Cookies.get('hotelView') || 'grid');

  const setHotelListView = (event: React.MouseEvent<HTMLElement>, newView: string | null) => {
    if (newView) {
      setView(newView);
      Cookies.set('hotelView', newView);
    }
  };

  return [view, setHotelListView];
}

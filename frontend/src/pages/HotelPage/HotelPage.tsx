import { useEffect, useState } from 'react';
import { getHotels } from '../../api/hotel';
import { HotelList } from '../../components/HotelList/HotelList';
import { HotelSearchForm } from '../../components/HotelSearchForm/HotelSearchForm';
import { Hotel } from '../../model/interfaces';

export function HotelPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getHotels().then((response) => {
      setHotels(response.data);
    });
  }, []);

  return (
    <>
      <HotelSearchForm />
      <HotelList hotels={hotels} />
    </>
  );
}

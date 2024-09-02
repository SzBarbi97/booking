import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getHotels } from '../../api/hotel';
import { HotelList } from '../../components/HotelList/HotelList';
import { HotelSearchForm } from '../../components/HotelSearchForm/HotelSearchForm';
import { HotelListItem } from '../../model/interfaces';

export function HotelPage() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState<HotelListItem[]>([]);

  useEffect(() => {
    getHotels(searchParams.toString()).then((response) => {
      setHotels(response.data);
    });
  }, [searchParams]);

  return (
    <>
      <HotelSearchForm />
      <HotelList hotels={hotels} />
    </>
  );
}

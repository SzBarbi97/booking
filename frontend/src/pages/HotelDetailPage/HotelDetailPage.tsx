import { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { getHotel } from '../../api/hotel';
import { HotelDetail } from '../../components/HotelDetail/HotelDetail';
import { HotelSearchForm } from '../../components/HotelSearchForm/HotelSearchForm';
import { Hotel } from '../../model/interfaces';
import { HotelDetailParams } from '../../model/interfaces/params';

export function HotelDetailPage() {
  const [hotelDetail, setHotelDetail] = useState<Hotel | null>(null);
  const { hotelId } = useParams<HotelDetailParams>();

  if (!hotelId) {
    redirect('hotels');
  }

  useEffect(() => {
    if (hotelId) {
      getHotel(hotelId).then((response) => {
        setHotelDetail(response.data);
      });
    }
  }, [hotelId]);

  return (
    <>
      <HotelSearchForm />
      {hotelDetail ? <HotelDetail hotel={hotelDetail} /> : ''}
    </>
  );
}

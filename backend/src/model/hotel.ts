export interface BaseHotel {
  id: string;
  title: string;
  country: string;
  price: string;
  mainImageUrl: string;
}

export interface HotelListItem extends BaseHotel {}

export interface Hotel extends BaseHotel {
  location: string;
  imageUrls: string[];
  maxAdults: number;
  maxChildren: number;
}

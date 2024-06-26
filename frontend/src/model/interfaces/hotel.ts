export interface BaseHotel {
  id: string;
  title: string;
  country: string;
  price: number;
  mainImageUrl: string;
}

export type HotelListItem = BaseHotel;

export interface Hotel extends BaseHotel {
  location: string;
  imageUrls: string[];
  description: string;
  services: string[];
  coordinate: Coordinate;
}

export type ServiceType = 'FREE_PARKING' | 'FREE_WIFI';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

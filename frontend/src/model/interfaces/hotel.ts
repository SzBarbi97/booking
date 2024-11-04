export interface BaseHotel {
  id: string;
  title: string;
  country: string;
  price: number;
  mainImageUrl: string;
  services: string[];
  rating: number;
  userRatingNumber: number;
  userRating: number;
}

export type HotelListItem = BaseHotel;

export interface Hotel extends BaseHotel {
  location: string;
  imageUrls: string[];
  description: string;
  languages: string[];
  attractions: string[];
  coordinate: Coordinate;
}

export type ServiceType = 'FREE_PARKING' | 'FREE_WIFI';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export type HotelListOrderType =
  | 'HOTEL_TITLE_ASC'
  | 'HOTEL_TITLE_DESC'
  | 'HOTEL_RATING_ASC'
  | 'HOTEL_RATING_DESC'
  | 'HOTEL_PRICE_ASC'
  | 'HOTEL_PRICE_DESC';

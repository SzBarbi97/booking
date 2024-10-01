export interface BaseHotel {
  id: string;
  title: string;
  country: string;
  price: string;
  mainImageUrl: string;
  services: string[];
  rating: number;
  userRatingNumber: number;
  userRating: number;
}

export interface HotelListItem extends BaseHotel {}

export interface Hotel extends BaseHotel {
  location: string;
  imageUrls: string[];
  description: string;
  languages: string[];
  attractions: string[];
  coordinate: Coordinate;
  maxAdults: number;
  maxChildren: number;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

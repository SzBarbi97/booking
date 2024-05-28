import { Hotel, HotelListItem } from './hotel';

export interface HotelListProps {
  hotels: HotelListItem[];
}

export interface HotelDescriptionProps {
  hotel: Hotel;
}

export interface HotelDetailProps {
  hotel: Hotel;
}

export interface ImageGalleryProps {
  mainImageUrl: string;
  imageUrls: string[];
}

export interface ImageGalleryModalProps {
  open: boolean;
  onClose: () => void;
  imageUrls: string[];
}

export interface HotelServiceListProps {
  services: string[];
}

export interface HotelServiceProps {
  service: string;
}

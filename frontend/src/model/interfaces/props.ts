import { Dayjs } from 'dayjs';
import { Coordinate, Hotel, HotelListItem } from './hotel';

export interface HotelListProps {
  hotels: HotelListItem[];
}

export type HotelListGridViewProps = HotelListProps;

export type HotelListListViewProps = HotelListProps;

export interface HotelListListViewItemProps {
  hotel: HotelListItem;
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

export type HotelServiceIconProps = HotelServiceProps;

export interface MapProps {
  coordinate: Coordinate;
  popupDescription: string;
  className: string;
}

export interface ErrorTooltipProps {
  errorMessage: string;
  showErrorMessage: boolean;
  className?: string;
}

export interface CountryPickerProps {
  countries: string[];
  countryDefault?: string;
}

export interface ReservationOfDatePickerProps {
  arrivalDateDefault?: Dayjs;
  exitDateDefault?: Dayjs;
}

export interface NumberOfAdultsProps {
  numberOfAdultsDefault?: string;
}

export interface NumberOfChildrenProps {
  numberOfChildrenDefault?: string;
}

export interface HotelSpokenLanguageListProps {
  languages: string[];
}

export interface HotelAttractionListProps {
  attractions: string[];
}

export interface UserRatingProps {
  userRating: number;
  userRatingNumber: number;
}

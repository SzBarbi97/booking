import { Hotel, HotelListItem } from '../model/hotel';
import fs from 'node:fs';

export function readDetailedHotels(hotels: HotelListItem[]): Hotel[] {
  return hotels.map((hotel) => readHotel(hotel.id));
}

export function readHotel(hotelId: string): Hotel {
  const fileContent: Buffer = fs.readFileSync(`./assets/data/${hotelId}.json`);

  return JSON.parse(fileContent.toString('utf-8'));
}

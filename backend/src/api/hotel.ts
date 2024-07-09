import fs from 'node:fs/promises';
import { Hotel, HotelListItem } from '../model/hotel';

export async function getHotels(req: any, res: any): Promise<void> {
  const fileContent: Buffer = await fs.readFile('./assets/data/hotels.json');
  let hotels: HotelListItem[] = JSON.parse(fileContent.toString('utf-8'));

  const countryQuery: string | null = req.query.country;

  if (countryQuery) {
   hotels = hotels.filter((hotel) => hotel.country.toLowerCase().includes(countryQuery.toLowerCase()));
  }

  res.status(200).json(hotels);
}

export async function getHotelCountries(req: any, res: any): Promise<void> {
  const fileContent: Buffer = await fs.readFile('./assets/data/hotels.json');
  const hotels: HotelListItem[] = JSON.parse(fileContent.toString('utf-8'));
  const countries: string[] = Array.from(new Set(hotels.map((hotel) => hotel.country)));

  res.status(200).json(countries);
}

export async function getHotel(req: any, res: any): Promise<void> {
  const id = req.params.id;
  const fileContent: Buffer = await fs.readFile(`./assets/data/${id}.json`);
  const hotel: Hotel = JSON.parse(fileContent.toString('utf-8'));

  res.status(200).json(hotel);
}

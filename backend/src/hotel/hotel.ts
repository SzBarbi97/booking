import fs from 'node:fs/promises';
import { Hotel } from '../model/hotel';

export async function getHotels(req: any, res: any): Promise<void> {
  const fileContent: Buffer = await fs.readFile('./assets/data/hotels.json');
  const hotels = JSON.parse(fileContent.toString('utf-8'));

  res.status(200).json(hotels);
}

export async function getHotelCountries(req: any, res: any): Promise<void> {
  const fileContent: Buffer = await fs.readFile('./assets/data/hotels.json');
  const hotels: Hotel[] = JSON.parse(fileContent.toString('utf-8'));
  const countries: string[] = Array.from(new Set(hotels.map((hotel) => hotel.country)));

  res.status(200).json(countries);
}
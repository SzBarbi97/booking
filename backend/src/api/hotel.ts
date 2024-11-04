import fs from 'node:fs/promises';
import { Hotel, HotelListItem } from '../model/hotel';
import { readDetailedHotels } from '../file/file';

export async function getHotels(req: any, res: any): Promise<void> {
  const fileContent: Buffer = await fs.readFile('./assets/data/hotels.json');
  let hotels: HotelListItem[] = JSON.parse(fileContent.toString('utf-8'));

  const countryQuery: string | null = req.query.country;
  const adultsQuery: number | null = req.query.numberOfAdults;
  const childrenQuery: number | null = req.query.numberOfChildren;

  const order: string | null = req.query.order;

  // A mock alkalmazásban az arrival date-re és exit date-re nem szűrűnk

  if (countryQuery) {
    hotels = hotels.filter((hotel) => hotel.country.toLowerCase().includes(countryQuery.toLowerCase()));
  }

  if (adultsQuery || childrenQuery) {
    let detailedHotels: Hotel[] = readDetailedHotels(hotels);

    if (adultsQuery) {
      detailedHotels = detailedHotels.filter((hotel) => hotel.maxAdults >= adultsQuery);
    }

    if (childrenQuery) {
      detailedHotels = detailedHotels.filter((hotel) => hotel.maxChildren >= childrenQuery);
    }

    const detailedHotelIds: string[] = detailedHotels.map((hotel) => hotel.id);
    hotels = hotels.filter((hotel) => detailedHotelIds.includes(hotel.id));
  }

  // rendezés
  if (order) {
    switch (order) {
      case 'HOTEL_TITLE_ASC':
        hotels = hotels.sort((h1, h2) => h1.title.localeCompare(h2.title));
        break;
      case 'HOTEL_TITLE_DESC':
        hotels = hotels.sort((h1, h2) => h2.title.localeCompare(h1.title));
        break;
      case 'HOTEL_RATING_ASC':
        hotels = hotels.sort((h1, h2) => h1.rating - h2.rating);
        break;
      case 'HOTEL_RATING_DESC':
        hotels = hotels.sort((h1, h2) => h2.rating - h1.rating);
        break;
      case 'HOTEL_PRICE_ASC':
        hotels = hotels.sort((h1, h2) => h1.price.localeCompare(h2.price));
        break;
      case 'HOTEL_PRICE_DESC':
        hotels = hotels.sort((h1, h2) => h2.price.localeCompare(h1.price));
        break;
    }
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

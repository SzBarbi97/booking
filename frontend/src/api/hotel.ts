import { AxiosResponse } from 'axios';
import axios from '../lib/axios/axios';
import { Hotel, HotelListItem } from '../model/interfaces';

export function getHotelCountries(): Promise<AxiosResponse<string[]>> {
  return axios.get<string[]>('hotels/countries');
}

export function getHotels(searchParams?: string): Promise<AxiosResponse<HotelListItem[]>> {
  const searchSuffix = searchParams ? `?${searchParams}` : '';
  return axios.get<HotelListItem[]>('hotels' + searchSuffix);
}

export function getHotel(id: string): Promise<AxiosResponse<Hotel>> {
  return axios.get<Hotel>(`hotels/${id}`);
}

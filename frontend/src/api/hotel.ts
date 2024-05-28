import { AxiosResponse } from 'axios';
import axios from '../lib/axios/axios';
import { Hotel, HotelListItem } from '../model/interfaces';

export function getHotelCountries(): Promise<AxiosResponse<string[]>> {
  return axios.get<string[]>('hotels/countries');
}

export function getHotels(): Promise<AxiosResponse<HotelListItem[]>> {
  return axios.get<HotelListItem[]>('hotels');
}

export function getHotel(id: string): Promise<AxiosResponse<Hotel>> {
  return axios.get<Hotel>(`hotels/${id}`);
}

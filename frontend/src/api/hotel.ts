import { AxiosResponse } from 'axios';
import axios from '../lib/axios/axios';
import { Hotel } from '../model/interfaces';

export function getHotelCountries(): Promise<AxiosResponse<string[]>> {
  return axios.get<string[]>('hotels/countries');
}

export function getHotels(): Promise<AxiosResponse<Hotel[]>> {
  return axios.get<Hotel[]>('hotels');
}

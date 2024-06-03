import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapProps } from '../../model/interfaces/props';
import styles from '../HotelDetail/HotelDetail.module.scss';

export function Map({ coordinate, popupDescription }: MapProps) {
  const { latitude, longitude } = coordinate;

  return (
    <MapContainer className={styles.mapContainer} center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>{popupDescription}</Popup>
      </Marker>
    </MapContainer>
  );
}

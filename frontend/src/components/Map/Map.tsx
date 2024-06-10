import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapProps } from '../../model/interfaces/props';

export function Map({ coordinate, popupDescription, className }: MapProps) {
  const { latitude, longitude } = coordinate;

  return (
    <MapContainer className={className} center={[latitude, longitude]} zoom={15} scrollWheelZoom={false}>
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

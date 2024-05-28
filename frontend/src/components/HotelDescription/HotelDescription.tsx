import { HotelDescriptionProps } from '../../model/interfaces/props';

export function HotelDescription({ hotel }: HotelDescriptionProps) {
  return (
    <div>
      <i>
        Szobafoglalás: <b>{hotel.price}</b> Ft/Éj-től
      </i>

      <div>
        <p>{hotel.description}</p>
      </div>
    </div>
  );
}

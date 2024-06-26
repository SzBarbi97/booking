import { HotelDescriptionProps } from '../../model/interfaces/props';
import { formatNumberByThousand } from '../../utils/format';

export function HotelDescription({ hotel }: HotelDescriptionProps) {
  return (
    <div>
      <i>
        Szobafoglalás: <b>{formatNumberByThousand(hotel.price)}</b> Ft-tól
      </i>

      <div>
        <p>{hotel.description}</p>
      </div>
    </div>
  );
}

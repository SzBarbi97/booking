import { HotelAttractionListProps } from '../../model/interfaces/props';

export function HotelAttractions({ attractions }: HotelAttractionListProps) {
  return (
    <>
      <h3>Látnivalók</h3>

      <div>
        {attractions.map((attraction) => (
          <ul key={attraction}>
            <li>{attraction}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

import { HotelSpokenLanguageListProps } from '../../model/interfaces/props';

export function HotelSpokenLanguages({ languages }: HotelSpokenLanguageListProps) {
  return (
    <>
      <h3>Beszélt nyelvek</h3>

      <div>
        {languages.map((language) => (
          <ul key={language}>
            <li>{language}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

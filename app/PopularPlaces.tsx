import Card1 from "./Card1";
import { places } from "../constants/popularPlaces";

export default function PopularPlaces() {
  return (
    <div>
      <h2 className="text-xl font-extrabold py-4">Popular places</h2>
      <div className="grid grid-cols-1 gap-6">
        {places.map((place) => (
          <Card1 key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

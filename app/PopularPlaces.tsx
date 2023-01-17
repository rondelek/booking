import React from "react";
import Card1 from "./Card1";

export default function PopularPlaces() {
  const places: Place[] = [
    {
      id: 1,
      name: "Lake views",
      image:
        "https://a0.muscache.com/im/pictures/1c5ab691-c49a-4914-86be-577fb3847db7.jpg?im_w=720",
      location: "Weggis, Switzerland",
      price: 90,
      rating: 5,
    },
    {
      id: 2,
      name: "Valley house",
      image:
        "https://a0.muscache.com/im/pictures/1c5ab691-c49a-4914-86be-577fb3847db7.jpg?im_w=720",
      location: "Weggis, Switzerland",
      price: 80,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Peak house",
      image:
        "https://a0.muscache.com/im/pictures/1c5ab691-c49a-4914-86be-577fb3847db7.jpg?im_w=720",
      location: "Weggis, Switzerland",
      price: 90,
      rating: 4.9,
    },
  ];
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

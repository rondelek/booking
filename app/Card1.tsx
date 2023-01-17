"use client";

import { useState } from "react";
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  place: Place;
};

export default function Card1({ place }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="card overflow-hidden">
      <a className="relative max-w-sm">
        <img
          className="rounded-t-lg hover:scale-110 duration-300"
          src={place.image}
          alt=""
        />
        <HeartIcon
          onClick={handleLike}
          className={`${
            isLiked ? "text-main-red" : "text-white"
          } absolute h-8 top-2 right-2 shadow-xl cursor-pointer hover:scale-105 duration-200 opacity-80`}
        />
      </a>
      <div className="p-5">
        <a href="#" className="flex items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {place.name}
          </h5>
          <div className="flex items-center space-x-1 justify-self-end ml-auto pb-2">
            <span className="text-gold w-5">
              <StarIcon />
            </span>
            <span>{place.rating}</span>
          </div>
        </a>
        <div className="flex items-center space-x-1 text-sm mb-2 font-normal text-main-gray -translate-x-1">
          <MapPinIcon className="h-4" />
          <p>{place.location}</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            ${place.price} <span className="text-xs">/ night</span>
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import HowItWorks from "./HowItWorks";
import PopularPlaces from "./PopularPlaces";
import Searchbox from "./Searchbox";

export default function Home() {
  return (
    <div>
      <Searchbox />
      <PopularPlaces />
      <HowItWorks />
    </div>
  );
}

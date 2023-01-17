import React from "react";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularPlaces from "./PopularPlaces";
import Searchbox from "./Searchbox";
import WhatCustomersSay from "./WhatCustomersSay";

export default function Home() {
  return (
    <div>
      <Searchbox />
      <PopularPlaces />
      <HowItWorks />
      <PopularCategories />
      {/* <WhatCustomersSay /> */}
    </div>
  );
}

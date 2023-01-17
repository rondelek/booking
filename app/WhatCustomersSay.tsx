import React from "react";
import Card3 from "./Card3";

export default function WhatCustomersSay() {
  return (
    <div>
      <h2 className="text-xl font-extrabold py-4">
        What our customers say about us
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <Card3 />
      </div>
    </div>
  );
}

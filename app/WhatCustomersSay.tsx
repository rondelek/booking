import React from "react";

export default function WhatCustomersSay() {
  return (
    <div>
      <h2 className="text-xl font-extrabold py-4">Popular categories</h2>
      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <Card2 key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { users } from "../constants/users";
import Card3 from "./Card3";

export default function WhatCustomersSay() {
  return (
    <div>
      <h2 className="text-xl font-extrabold py-4">
        What our customers say about us
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <Card3 user={user} />
        ))}
      </div>
    </div>
  );
}

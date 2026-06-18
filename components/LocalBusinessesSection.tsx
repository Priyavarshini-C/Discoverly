"use client";

import { useEffect, useState } from "react";
import { getLocalBusinesses } from "@/lib/api";

export default function LocalBusinessesSection() {
  const [businesses, setBusinesses] = useState<any[]>([]);

  useEffect(() => {
    getLocalBusinesses().then((data) => {
      setBusinesses(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {businesses.map((business) => (
        <div
          key={business.id}
          className="border rounded-lg p-4"
        >
          <h3 className="font-bold">
            {business.name}
          </h3>

          <p>{business.category}</p>

          <p>{business.location}</p>

          <p>Owner: {business.owner}</p>
        </div>
      ))}
    </div>
  );
}
"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const itemsArray = [...itemsData];

  itemsArray.sort((a, b) => {
    const valueA = a[sortBy].toUpperCase();
    const valueB = b[sortBy].toUpperCase();
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  });

  return (
  <section>
    <div className="flex gap-4 m-5">
      <button
        onClick={() => setSortBy("name")}
        className={`px-4 py-2 rounded ${
          sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:cursor-pointer"
        }`}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`px-4 py-2 rounded ${
          sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600 hover:cursor-pointer"
        }`}
      >
        Sort by Category
      </button>
    </div>

    <ul>
        {itemsArray.map((item) => (
        <Item key={item.id} {...item} />
        ))}
    </ul>
  </section>
);
}
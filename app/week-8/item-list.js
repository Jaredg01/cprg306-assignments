"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const getSortedItems = () => {
    return [...items].sort((a, b) => {
    const valueA = a[sortBy].toUpperCase();
    const valueB = b[sortBy].toUpperCase();
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    });
  }

  const sortedItems = getSortedItems();

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
        {sortedItems.map((item) => (
        <Item 
        key={item.id} 
        {...item} 
        onSelect={() => onItemSelect(item)}
        />
        ))}
    </ul>
  </section>
);
}
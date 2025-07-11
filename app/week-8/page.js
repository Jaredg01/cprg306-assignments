"use client"

import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";
import itemsData from "./items"
import MealIdeas  from "./meal-ideas";

import { useState } from "react";


export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

const handleItemSelect = (item) => {
  let cleanedName = item.name.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  );

  cleanedName = cleanedName.split(",")[0];

  cleanedName = cleanedName.trim();

  setSelectedItemName(cleanedName);
};

    

return (
    <main className="m-5">
      <h1 className="text-5xl text-blue-400 mb-6">Shopping List</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          {selectedItemName && (
            <MealIdeas ingredient={selectedItemName} />
          )}
        </div>
      </div>
    </main>
  );
}

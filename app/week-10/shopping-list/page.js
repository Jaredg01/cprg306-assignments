"use client"

import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";
import itemsData from "./items"
import MealIdeas  from "./meal-ideas";
import getItems from "../_services/shopping-list-service";
import addItem from "../_services/shopping-list-service";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";


export default function Page(){

    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    }

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    if (!user) {
      return (
        <p>
          You need to be signed in to vew this page.
        </p>
      )
    };

    const handleAddItem = async (newItem) => {
        const id = await addItem(user.uid, newItem);
        const itemWithId = { ...newItem, id };
        setItems((prevItems) => [...prevItems, itemWithId]);
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

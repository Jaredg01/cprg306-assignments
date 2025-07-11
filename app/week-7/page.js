"use client"

import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";
import itemsData from "./items"
import { useState } from "react";


export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    

    return(
        <main>
            <h1 className="text-5xl
                           m-5
                           text-blue-400">
                Shopping List
            </h1>

            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
}
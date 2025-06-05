"use client"

import { useState } from "react"


export default function NewItem() {

    // Setting Quantity
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    // Button Functions
    const Increment = (event) => {
        event.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(20)
        };
    }

    const Decrement = (event) => {
        event.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            setQuantity(1)
        };
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        setCategory(event.target.value)
    }

    const HandleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.dir(item);

        alert(`
            Added item
            Name: ${item.name}
            Quantity: ${item.quantity}
            Category: ${item.category}
            `)

        setName("");
        setQuantity(1);
        setCategory("");
    }

    // Button Styling
    let incrementStyles = "bg-blue-500 hover:cursor-pointer active:bg-blue-300 text-white px-5 py-1 m-2 rounded";
    if (quantity >= 20) {
        incrementStyles = "bg-gray-500 text-white px-5 py-1 m-2 rounded"
    }

    let decrementStyles = "bg-blue-500 hover:cursor-pointer active:bg-blue-300 text-white px-5 py-1 m-2 rounded";
    if (quantity <= 1) {
        decrementStyles = "bg-gray-500 text-white px-5 py-1 m-2 rounded"
    }

    // Page Display
    return(
        <main>
            <form>
                <div className="bg-gray-700 w-75 h-70 p-5 rounded-3xl m-5">
                    <div className="my-2">
                        <label className="inline-block w-15">Name: </label>
                        <input type="text" 
                               className="border border-white rounded"
                               onChange={handleNameChange}
                               value={name}
                               required={true}/>
                    </div>
                    <div className="my-2">
                        <label className="inline-block w-20">Category: </label>
                        <select 
                            className="border Border-white rounded bg-gray-700"
                            onChange={handleCategoryChange}
                            value={category}
                            required={true}>
                            <option disabled value="">Select Category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Gooods">Canned Gooods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="bg-blue-100 w-40 h-20 rounded-2xl pl-4 my-4 ml-12">
                        <p className="text-gray-700 mx-6">Quantity: {quantity}</p>
                        <button onClick={Decrement}
                                className={decrementStyles}>-</button>
                        <button onClick={Increment}
                                className={incrementStyles}>+</button>
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-300 text-white px-5 py-1 ml-24 mt-4 rounded hover:cursor-pointer active:bg-blue-500"
                        onSubmit={HandleSubmit}>Add</button>
                </div>
            </form>
        </main>
    )
}
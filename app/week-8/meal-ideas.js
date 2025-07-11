"use client"

import { useEffect } from "react";
import { useState } from "react";


export default function MealIdeas({ ingredient }){

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const ideas = await fetchMealIdeas(ingredient);
        setMeals(ideas);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-3">Meal Ideas for: {ingredient}</h2>

        {meals.length > 0 ? (
        <ul className="list-disc pl-6">
            {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
        </ul>
        ) : (
        <p>No meals found for "{ingredient}".</p>
        )}
    </div>
    );

}

async function fetchMealIdeas(ingredient){
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        if (!response.ok) {
            throw new Error("Could not fetch meal ideas.")
        }

        const data = await response.json();

        return data.meals || [];
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}
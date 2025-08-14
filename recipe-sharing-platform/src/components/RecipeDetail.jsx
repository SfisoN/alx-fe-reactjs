import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => String(item.id) === String(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-500 hover:underline"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
      </div>

      {/* Placeholder if ingredients are not in JSON */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <p className="text-gray-500">Ingredients list not available.</p>
      </div>

      {/* Placeholder if instructions are not in JSON */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <p className="text-gray-500">Instructions not available.</p>
      </div>
    </div>
  );
};

export default RecipeDetail;

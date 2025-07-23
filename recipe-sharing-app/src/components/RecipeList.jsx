// components/RecipeList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore'; // Adjust path if needed

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
};

const RecipeList = () => {
  const {
    filteredRecipes,
    searchTerm,
    filterRecipes,
    favorites,
    addFavorite,
    removeFavorite,
  } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const toggleFavorite = (id) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div className="p-4">
      <SearchBar />

      <div className="mb-4">
        <Link to="/add" className="text-blue-600 underline">
          ➕ Add New Recipe
        </Link>
      </div>

      {filteredRecipes.length > 0 ? (
        <ul className="space-y-4">
          {filteredRecipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border rounded p-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-600">{recipe.description}</p>
              </div>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => toggleFavorite(recipe.id)}
              >
                {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;

// components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../store/useRecipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations(); // Call on mount or when favorites change
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow bg-white mt-4">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites!</p>
      ) : (
        <ul className="space-y-2">
          {recommendations.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;

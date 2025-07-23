import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  filteredRecipes: [],
  searchTerm: '',
  recommendations: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Replace all recipes
  setRecipes: (recipes) =>
    set({
      recipes,
    }),

  // Set search term
  setSearchTerm: (term) =>
    set({
      searchTerm: term,
    }),

  // Filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Add recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;

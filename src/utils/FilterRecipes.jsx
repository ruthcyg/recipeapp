// src/utils/FilterRecipes.js

/**
 * Filters recipes based on search text and dietary preferences.
 *
 * @param {Array} recipes - The array of recipe objects.
 * @param {string} searchText - The text to filter recipes by their name or description.
 * @param {boolean} isVegetarian - Whether to filter for vegetarian recipes only.
 * @param {boolean} isGlutenFree - Whether to filter for gluten-free recipes only.
 * @returns {Array} - The filtered array of recipes.
 */
const FilterRecipes = (recipes, searchText, isVegetarian, isGlutenFree) => {
  let filteredRecipes = recipes;

  // Filter by search text
  if (searchText) {
    filteredRecipes = filteredRecipes.filter(
      recipe =>
        recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  // Filter by vegetarian flag
  if (isVegetarian) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.dietaryTags.includes('vegetarian'),
    );
  }

  // Filter by gluten-free flag
  if (isGlutenFree) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.dietaryTags.includes('gluten-free'),
    );
  }

  return filteredRecipes;
};

export default FilterRecipes;

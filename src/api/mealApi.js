import { handleResponse, handleError } from './apiUtils';

const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const getMeals = async searchTerm => fetch(`${mealsUrl}${searchTerm}`)
  .then(handleResponse)
  .catch(handleError);

export const getMeal = async id => fetch(`${mealUrl}${id}`)
  .then(handleResponse)
  .catch(handleError);

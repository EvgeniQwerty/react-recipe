import { API_URL } from './config';

async function getAllCategories() {
    console.log(API_URL + 'categories.php');
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

async function getMealsInCategory(category) {
    const response = await fetch(API_URL + 'filter.php?c=' + category);
    return await response.json();
}

async function getMealById(mealId) {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

export { getAllCategories, getMealsInCategory, getMealById };

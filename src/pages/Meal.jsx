import { useState, useEffect } from 'react';
import { getMealById } from '../api';
import { useParams, useHistory } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { RecipeCard } from '../components/RecipeCard';

function Meal() {
    const [recipe, setRecipe] = useState({});

    const meal = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(meal.id).then((data) => {
            setRecipe(data.meals[0]);
            console.log(data.meals[0]);
        });
    }, [meal.id]);

    return (
        <>
            {recipe ? <RecipeCard data={recipe} /> : <Preloader />}
            <button className='btn indigo' onClick={goBack}>
                Back
            </button>
        </>
    );
}

export { Meal };

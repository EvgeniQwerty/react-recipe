import { useState, useEffect } from 'react';
import { getMealsInCategory } from '../api';
import { MealCards } from '../components/MealCards';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

function Meals() {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const { pathname, search } = useLocation();
    const { push, goBack } = useHistory();
    const category = useParams();

    const handleSearch = (name) => {
        setFilteredMeals(
            meals.filter((elem) => {
                return elem.strMeal.toLowerCase().includes(name.toLowerCase());
            })
        );
        push({
            pathname,
            search: `?search=${name}`,
        });
    };

    useEffect(() => {
        getMealsInCategory(category.name).then((data) => {
            setMeals(data.meals);

            if (search)
                setFilteredMeals(
                    data.meals.filter((item) =>
                        item.strMeal
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    )
                );
            else setFilteredMeals(data.meals);
        });
    }, [search, category.name]);

    return (
        <>
            <button className='btn indigo' onClick={goBack}>
                Back
            </button>
            <Search cb={handleSearch} />
            {meals.length ? (
                <MealCards items={filteredMeals}></MealCards>
            ) : (
                <Preloader />
            )}
        </>
    );
}
export { Meals };

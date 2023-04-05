import { Link } from 'react-router-dom';

function MealCard(props) {
    const { strMeal, strMealThumb, idMeal } = props;

    return (
        <Link to={`/meals/${idMeal}`}>
            <div className='card' id={idMeal}>
                <div className='card-image'>
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className='card-content'>
                    <span className='card-title center'>{strMeal}</span>
                </div>
            </div>
        </Link>
    );
}

export { MealCard };

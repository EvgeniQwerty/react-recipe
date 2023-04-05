import { MealCard } from './MealCard';

function MealCards(props) {
    const { items } = props;

    if (items)
        return (
            <div className='cards-container'>
                {items.map((elem) => (
                    <MealCard key={elem.idMeal} {...elem} />
                ))}
            </div>
        );
    else return <h3>Nothing there</h3>;
}

export { MealCards };

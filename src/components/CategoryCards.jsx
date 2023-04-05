import { CategoryCard } from './CategoryCard';

function CategoryCards(props) {
    const { items = [] } = props;

    if (items)
        return (
            <div className='cards-container'>
                {items.map((elem) => (
                    <CategoryCard key={elem.idCategory} {...elem} />
                ))}
            </div>
        );
    else return <h3>Nothing there</h3>;
}

export { CategoryCards };

import { Link } from 'react-router-dom';

function CategoryCard(props) {
    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;

    return (
        <Link to={`/categories/${strCategory}`}>
            <div className='card good' id={idCategory}>
                <div className='card-image'>
                    <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <div className='card-content'>
                    <span className='card-title center'>{strCategory}</span>
                    <p className='card-desc'>
                        {strCategoryDescription.slice(0, 60)}...
                    </p>
                </div>
            </div>
        </Link>
    );
}

export { CategoryCard };

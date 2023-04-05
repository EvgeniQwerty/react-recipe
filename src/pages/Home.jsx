import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CategoryCards } from '../components/CategoryCards';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { useLocation, useHistory } from 'react-router-dom';

function Home() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (name) => {
        setFilteredCategories(
            categories.filter((elem) => {
                return elem.strCategory
                    .toLowerCase()
                    .includes(name.toLowerCase());
            })
        );
        push({
            pathname,
            search: `?search=${name}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
            if (search)
                setFilteredCategories(
                    data.categories.filter((item) =>
                        item.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    )
                );
            else setFilteredCategories(data.categories);
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            {categories.length ? (
                <CategoryCards items={filteredCategories} />
            ) : (
                <Preloader />
            )}
        </>
    );
}
export { Home };

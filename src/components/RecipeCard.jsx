function RecipeCard(props) {
    const { data } = props;

    return (
        <div className='recipe'>
            <img src={data.strMealThumb} alt={data.strMeal} />
            <h1>{data.strMeal}</h1>
            <h5>Category: {data.strCategory}</h5>
            {data.strArea ? <h6>Area: {data.strArea}</h6> : null}

            <p>{data.strInstructions}</p>

            <table className='striped highlight centered recipe-table'>
                <thead>
                    <tr>
                        <th>Ingregient</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(data).map((key) => {
                        console.log(key);
                        console.log(data[key]);
                        if (key.includes('Ingredient') && data[key]) {
                            return (
                                <tr key={key}>
                                    <td>{data[key]}</td>
                                    <td>
                                        {data[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {data.strYoutube ? (
                <div className='row'>
                    <h5>Video Recipe</h5>
                    <iframe
                        title={data.strMeal}
                        src={`https://www.youtube.com/embed/${data.strYoutube.slice(
                            -11
                        )}`}
                        allowfullscreen
                    />
                </div>
            ) : null}
        </div>
    );
}

export { RecipeCard };

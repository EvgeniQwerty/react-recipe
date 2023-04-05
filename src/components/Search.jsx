import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        console.log(value);
        cb(value);
    };

    return (
        <div className='row search-bar'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='Search'
                    onKeyDown={handleKey}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
            </div>
            <button className='btn indigo' onClick={handleSubmit}>
                Search
            </button>
        </div>
    );
}

export { Search };

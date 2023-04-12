
import { useState } from 'react';

const SearchBar = ({ handleSearch, sortByLowest, sortByHighest }) => {
    const [showButton, setShowButton] = useState(true);


    const toggle_show_button = () => {
        if (showButton) {
            setShowButton(!showButton);
            sortByLowest();
        } else {
            sortByHighest();
            setShowButton(!showButton)


        }
    }
    return (
        <div className="SearchBar">
            <label htmlFor='search' className='search-label'>Search Product</label>
            <input
                type='text'
                id='search'
                className='search-field'
                placeholder='Search product or keyword'
                onChange={(e) => handleSearch(e.target.value)}

            />

            {showButton &&
                <button onClick={toggle_show_button} className='lowestPrice'>
                    Lowest price
                </button>
            }

            {!showButton &&
                <button onClick={toggle_show_button} className='highestPrice'>
                    Highest price
                </button>

            }
        </div>
    );
}

export default SearchBar;
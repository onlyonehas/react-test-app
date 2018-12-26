import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input 
                className='ps3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />

        </div>
    );

}

export default SearchBox;
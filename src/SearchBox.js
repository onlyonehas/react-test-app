import React from 'react';

const SearchBox = ({searchfield, seachChange}) => {
    return (
        <div>
            <input 
                className='ps3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={seachChange}
            />

        </div>
    );

}

export default SearchBox;
import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder='search monsters'
        onChange={handleChange}
    />
)
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import './search.css';

const Search = () => {
	return (
		<div className='search-container'>
			<a className='location-btn' href='#/'>
				<FaLocationArrow />
			</a>
			<input placeholder='(Ex: New York, NY)' />
			<a className='search-btn' href='#/'>
				Submit
			</a>
		</div>
	);
};

export default Search;

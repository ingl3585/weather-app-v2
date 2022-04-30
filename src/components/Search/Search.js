import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import './search.css';

const Search = ({
	userLocationForecast,
	setWeatherSearch,
	userSearchForecast,
}) => {
	return (
		<div className='search-container'>
			<h1 className='search-title'>Total Weather</h1>
			<div className='search-field'>
				<button className='location-btn' onClick={userLocationForecast}>
					<FaLocationArrow size={20} />
				</button>
				<input
					onChange={(event) => {
						let input = event.target.value;
						setWeatherSearch(input.replace(/ /g, ''));
					}}
					type='text'
					placeholder='(Ex: New York, NY)'
				/>
				<button
					className='search-btn'
					onClick={userSearchForecast}
					type='submit'>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Search;

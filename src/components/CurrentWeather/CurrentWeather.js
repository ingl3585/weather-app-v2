import React from 'react';
import { FaWind } from 'react-icons/fa';
import './currentweather.css';

const CurrentWeather = ({ currentWeatherData, capitalizeDescription }) => {
	const weatherIcon = currentWeatherData?.weather.icon;
	const weatherIconUrl = `https://weather-app-react-native.s3.us-west-1.amazonaws.com/${weatherIcon}.svg`;
	if (currentWeatherData) {
		return (
			<div className='current-weather-container'>
				<h1 className='current-weather-title'>Right Now In:</h1>
				<h1 className='city-state'>
					{currentWeatherData.city_name}, {currentWeatherData.state_code}
				</h1>
				<div className='current-weather-info'>
					<img
						className='current-weather-icon'
						src={weatherIconUrl}
						alt='weather-icon'
					/>
					<h3>{capitalizeDescription()}</h3>
					<h2 className='current-weather-temperature'>
						{Math.round(currentWeatherData.temp)}°F
					</h2>
					<ul className='extra-current-weather-info'>
						<li>
							<FaWind />{' '}
						</li>
						<li>{Math.round(currentWeatherData.wind_spd)} mph</li>
						<li>RH:</li>
						<li>{Math.round(currentWeatherData.rh)}%</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default CurrentWeather;

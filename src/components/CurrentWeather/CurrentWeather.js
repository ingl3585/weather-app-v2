import React from 'react';
import './currentweather.css';

const CurrentWeather = ({ currentWeatherData, capitalizeDescription }) => {
	const weatherIcon = currentWeatherData?.weather.icon;
	const weatherIconUrl = `https://weather-app-react-native.s3.us-west-1.amazonaws.com/${weatherIcon}.svg`;
	if (currentWeatherData) {
		return (
			<main>
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
					<h2>{currentWeatherData.temp}°F</h2>
					<div className='extra-current-weather-info'>
						<h6>{currentWeatherData.wind_spd} mph</h6>
						<h6>{currentWeatherData.rh}%</h6>
					</div>
				</div>
			</main>
		);
	}
};

export default CurrentWeather;

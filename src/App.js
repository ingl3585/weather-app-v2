import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import HourlyWeather from './components/HourlyWeather/HourlyWeather';
import ForecastWeather from './components/ForecastWeather/ForecastWeather';
import './App.css';

const BASE_WEATHER_URL = `https://api.weatherbit.io/v2.0`;

const App = () => {
	// Current Weather Data State
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	// Forecast Weather Data State
	const [forecastWeatherData, setForecastWeatherData] = useState(null);
	// Error Message State
	const [error, setError] = useState(null);
	// Weather API Call
	const fetchWeatherData = async () => {
		try {
			navigator.geolocation.getCurrentPosition(async (location) => {
				const latitude = location.coords.latitude;
				const longitude = location.coords.longitude;
				const currentWeatherEndpoint = `${BASE_WEATHER_URL}/current?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_API_KEY}&units=I`;
				const forecastWeatherEndpoint = `${BASE_WEATHER_URL}/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_API_KEY}&units=I&days=6`;
				const [
					currentWeatherEndpointResponse,
					forecastWeatherEndpointResponse,
				] = await Promise.all([
					fetch(currentWeatherEndpoint),
					fetch(forecastWeatherEndpoint),
				]);
				const [currentData, forecastData] = await Promise.all([
					currentWeatherEndpointResponse.json(),
					forecastWeatherEndpointResponse.json(),
				]);
				if (
					currentWeatherEndpointResponse.ok &&
					forecastWeatherEndpointResponse.ok
				) {
					setForecastWeatherData(forecastData.data);
					setCurrentWeatherData(currentData.data[0]);
				} else {
					setError(forecastData.message);
					setError(currentData.message);
				}
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	// Call APIs on Page Load
	useEffect(() => {
		fetchWeatherData();
	}, []);
	// Capitalize Weather Description (Dynamically)
	const capitalizeDescription = () => {
		// Get Description from currentWeatherData
		const description = currentWeatherData.weather.description;
		// RegEx Transformation
		const capitalized = description.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
			letter.toUpperCase()
		);
		// Return New Description
		return capitalized;
	};
	return (
		<div className='app-container'>
			<CurrentWeather
				className='current-weather'
				currentWeatherData={currentWeatherData}
				capitalizeDescription={capitalizeDescription}
			/>
			<ForecastWeather
				className='forecast-weather'
				forecastWeatherData={forecastWeatherData}
			/>
			<HourlyWeather className='hourly-weather' />
		</div>
	);
};

export default App;

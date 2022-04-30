import React from 'react';
import { BiDroplet } from 'react-icons/bi';
import './forecastweather.css';

const ForecastWeather = ({ forecastWeatherData }) => {
	const weatherDataList = forecastWeatherData?.map((data) => {
		// Define Weather Icon
		const weatherIcon = data.weather.icon;
		const weatherIconUrl = `https://weather-app-react-native.s3.us-west-1.amazonaws.com/${weatherIcon}.svg`;
		// Define Current Date
		let today = new Date().toISOString().slice(0, 10);
		// Get Date From Each Day
		const date = data.datetime;
		// Convert Date to Day of Week
		const getDayOfWeek = (date) => {
			const dayOfWeek = new Date(date).getDay();
			if (today === date) {
				return 'Today';
			}
			return isNaN(dayOfWeek)
				? null
				: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
				  ][dayOfWeek];
		};
		// HTML Format
		return (
			<ul className='weather-forecast-list' key={data.datetime}>
				<li className='weekday-title'>{getDayOfWeek(date)}</li>
				<img
					className='forecast-weather-icon'
					src={weatherIconUrl}
					alt='weather-icon'
				/>
				<li>H: {Math.round(data.max_temp)}</li>
				<li>L: {Math.round(data.low_temp)}</li>
				<li>
					<BiDroplet /> {data.pop}%
				</li>
			</ul>
		);
	});
	return (
		<div className='forecast-weather-container'>
			<h1 className='forecast-weather-title'>Weather Forecast</h1>
			{weatherDataList}
		</div>
	);
};

export default ForecastWeather;

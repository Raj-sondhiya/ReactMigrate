import React, { useState } from 'react';
import "./Weather.css";
const Weather = () => {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6bcf6c9630948de1fc78a46cd3afc611`)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0];
                const icon = weather.icon;
                const description = weather.description;
                const temperature = data.main.temp;
                setWeatherData({
                    description,
                    iconUrl: `http://openweathermap.org/img/w/${icon}.png`,
                    temperature: `${temperature} K`,
                });
            })
            .catch(error => console.error('Error fetching weather data:', error));
    };

    return (
        <div>
            <h3>Weather details using OpenWeatherMap API</h3>
            <div className="custom-container">
                <div className="input-group">
                    <input
                        type="text"
                        id="cityName"
                        placeholder="Enter city name"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                </div>
                <button id="getWeather" onClick={getWeather}>
                    Get weather
                </button>
                <div id="outPut">
                    {weatherData && (
                        <>
                            <span>{weatherData.description}</span>
                            <img id="weatherIcon" src={weatherData.iconUrl} width="100" height="100" alt="Weather Icon" />
                            <p>Temperature: {weatherData.temperature}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather;

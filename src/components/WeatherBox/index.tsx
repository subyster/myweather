import React from 'react';

import { Container, Weather } from './styles';

// the main reason I create my apps with typescript is for a better control of
// API response, so I create this interface to declare only the response fields
// I'm going to use in my app
export interface CityWeather {
  weather: {
    main: string;
  }[]
  main: {
    temp: number;
    humidity: number;
  }
  name: string;
}

// this interface is going to serve the "WeatherBox" component with the weather
// API data saved on "cityWeather" state in Layout
interface WeatherBoxProps {
  currentWeater: CityWeather;
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ currentWeater }) => {
  return (
    <Container>
      <h1>{currentWeater.name}</h1>

      <Weather>
          <li>
            <span>weather:</span>
            <strong>{currentWeater.weather[0].main}</strong>
          </li>

          <li>
            <span>temperature:</span>
            <strong>{currentWeater.main.temp}°C</strong>
          </li>

          <li>
            <span>humidity:</span>
            <strong>{currentWeater.main.humidity}%</strong>
          </li>
      </Weather>
    </Container>
    );
}

export default WeatherBox;
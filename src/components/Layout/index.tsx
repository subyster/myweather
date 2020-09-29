import React, { FormEvent, useState } from 'react';

// I use this index.tsx/styles.ts pattern for my pages and components because I
// believe this provides a clean code pattern
import { Container } from './styles';

// I created this component for a cleaner code and for a scalable project
import WeatherBox, { CityWeather } from '../WeatherBox';

// I created this api file again for a cleaner code in case I create further 
// calls from the weather API
import api from '../../services/api';

const Layout: React.FC = () => {
  // this state was created to recieve weather data from api
  const [cityWeather, setCityWeather] = useState<CityWeather>();

  // created this state for a simple form filling
  const [cityName, setCityName] = useState("");

  // function called on form submit, it fetches data from api using provided city
  // name, then updates "cityWeather" state which will serve "Weatherbox" component
  async function searchCity(e: FormEvent) {
    e.preventDefault();

    // here I used my API key "c10bcbb90d3d3525e910ca006dbcc72f" on appid query 
    // param and set units to metric, since default response sets temperature 
    // to kelvin
    const response = await api.get(
      `weather?q=${cityName}&units=metric&appid=c10bcbb90d3d3525e910ca006dbcc72f`
    );

    setCityWeather(response.data);
  }

  return (
    <Container>
      <h1>My weather</h1>

      <form onSubmit={searchCity}>
        <h2>Search for a city to see current weather:</h2>

        <input 
          type="text" 
          name="city"
          placeholder="Type city name here"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* The "WeatherBox" component is renderized only after search form is
        submitted with a valid api response */}
      {cityWeather !== undefined && (
        <WeatherBox currentWeater={cityWeather}/>
      )}
    </Container>
    );
}

export default Layout;
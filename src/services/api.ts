import axios from 'axios';

// I chose axios as my preferred lib for API calls, and this file creates a
// base url call for this app
const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default api;

// I chose this 'openweathermap' as the weather API provider because it has a
// free service for current weather, only needing an API key
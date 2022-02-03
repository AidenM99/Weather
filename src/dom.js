import getCity from './api';
import { capitalise, getDate } from './app';

const domFunctions = (() => {
  function citySearch() {
    const search = document.getElementById('search');

    search.addEventListener('search', () => {
      getCity(search.value);
    });
  }

  function renderWeatherData(data, city) {
    const weatherDesc = document.querySelector('.weather-desc');
    weatherDesc.textContent = capitalise(data.current.weather[0].description);

    const location = document.querySelector('.location');
    location.textContent = capitalise(city);

    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.round(data.current.temp);

    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

    const time = document.querySelector('.time');
    time.textContent = getDate(data.current.dt, data.timezone_offset);

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = `Feels Like: ${Math.round(
      data.current.feels_like
    )}`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `Humidity: ${data.current.humidity}%`;

    const windSpeed = document.querySelector('.wind-speed');
    windSpeed.textContent = `Wind: ${Math.round(data.current.wind_speed)} mph`;
  }

  return { citySearch, renderWeatherData };
})();

export default domFunctions;

import getCity from './api';
import { formatText, getDate } from './app';

const domFunctions = (() => {
  function clearForecast() {
    const weatherForecast = document.querySelector('.weather-forecast');
    while (weatherForecast.firstChild) {
      weatherForecast.removeChild(weatherForecast.lastChild);
    }
  }

  function citySearch() {
    const search = document.getElementById('search');

    search.addEventListener('search', () => {
      clearForecast();
      getCity(search.value);
    });
  }

  function reportSearchError() {
    const search = document.getElementById('search');

    search.setCustomValidity('Please enter a valid city');
    search.reportValidity();
    search.addEventListener('input', () => {
      search.setCustomValidity('');
    });
  }

  function buttonController() {
    const forecastButtons = document.querySelectorAll('.forecast-button');
    forecastButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        for (let i = 0; i < 2; i++) {
          forecastButtons[i].classList.remove('selected-button');
        }
        e.target.classList.add('selected-button');
      });
    });
  }

  function renderWeatherForecast(data) {
    for (let i = 1; i < 8; i++) {
      const forecastContainer = document.querySelector('.weather-forecast');

      const forecast = document.createElement('div');
      forecast.classList.add('forecast');

      const day = document.createElement('h3');
      day.textContent = getDate(data.daily[i].dt, data.timezone_offset).slice(
        0,
        3
      );

      const icon = document.createElement('img');
      icon.classList.add('weather-icon');
      icon.src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;

      const temp = document.createElement('p');
      temp.textContent = `${Math.round(data.daily[i].temp.max)}°/${Math.round(
        data.daily[i].temp.min
      )}°`;

      forecast.appendChild(day);
      forecast.appendChild(icon);
      forecast.appendChild(temp);
      forecastContainer.appendChild(forecast);
    }
    console.log(data);
  }

  function renderWeatherData(data, city) {
    const weatherDesc = document.querySelector('.weather-desc');
    weatherDesc.textContent = formatText(data.current.weather[0].description);

    const location = document.querySelector('.location');
    location.textContent = formatText(city);

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

    renderWeatherForecast(data);
  }

  function loadPage() {
    citySearch();
    getCity('London');
    buttonController();
  }

  return {
    renderWeatherData,
    reportSearchError,
    loadPage,
  };
})();

export default domFunctions;

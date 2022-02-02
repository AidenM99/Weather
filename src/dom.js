import getCity from './api';
import { getWeatherDesc, getTime } from './app';

const domFunctions = (() => {
  function citySearch() {
    const search = document.getElementById('search');

    search.addEventListener('search', () => {
      getCity(search.value);
    });
  }

  function displayWeatherData(data) {
    console.log(data);
    const weatherDesc = document.querySelector('.weather-desc');
    const weatherIcon = document.querySelector('.weather-icon');
    const time = document.querySelector('.time');

    weatherDesc.textContent = getWeatherDesc(data);
    time.textContent = getTime(data);
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
  }

  return { citySearch, displayWeatherData };
})();

export default domFunctions;

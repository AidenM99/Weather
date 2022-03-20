import { findCity, getCityData } from './api';
import { formatText, getDate } from './app';

const domFunctions = (() => {
  function clearForecast() {
    const dailyForecast = document.querySelector('.daily-forecast');
    while (dailyForecast.firstChild) {
      dailyForecast.removeChild(dailyForecast.lastChild);
    }

    const hourlyForecast = document.querySelectorAll('.hourly-forecast');
    for (let i = 0; i < hourlyForecast.length; i++) {
      while (hourlyForecast[i].firstChild) {
        hourlyForecast[i].removeChild(hourlyForecast[i].lastChild);
      }
    }
  }

  function getUnit() {
    const temperatureContainer = document.querySelector(
      '.temperature-converter'
    );

    if (temperatureContainer.classList.contains('celsius-active')) {
      return 'metric';
    }
    return 'imperial';
  }

  function citySearch() {
    const search = document.getElementById('search');
    const searchIcon = document.querySelector('.search-button');

    search.addEventListener('search', () => {
      getCityData(search.value, getUnit());
      clearForecast();
      search.value = '';
    });

    searchIcon.addEventListener('click', () => {
      getCityData(search.value, getUnit());
      clearForecast();
      search.value = '';
    });
  }

  // If API cannot find city name
  function reportSearchError() {
    const search = document.getElementById('search');

    search.setCustomValidity('Please enter a valid city');
    search.reportValidity();
    search.addEventListener('input', () => {
      search.setCustomValidity('');
    });
  }

  // Find which circle is highlighted to determine hour range to display for hourly forecast
  function getActiveButton() {
    const circleButton = document.querySelectorAll('.circle');
    let activeButton;
    for (let i = 0; i < circleButton.length; i++) {
      if (circleButton[i].classList.contains('circle-active')) {
        activeButton = circleButton[i].id;
      }
    }
    return activeButton;
  }

  // 'Daily' and 'Hourly' button controller
  function forecastNavController() {
    const hourlyButton = document.querySelector('.hourly');
    const dailyForecast = document.querySelector('.daily-forecast');
    const hourlyForecast = document.querySelectorAll('.hourly-forecast');
    const forecastArrows = document.querySelector('.forecast-arrows');

    for (let i = 0; i < hourlyForecast.length; i++) {
      hourlyForecast[i].style.display = 'none';
    }

    if (hourlyButton.classList.contains('selected-button')) {
      document.querySelector(`.${getActiveButton()}`).style.display = 'flex';
      forecastArrows.style.display = 'flex';
      dailyForecast.style.display = 'none';
    } else {
      forecastArrows.style.display = 'none';
      dailyForecast.style.display = 'flex';
    }
  }

  function buttonController() {
    const forecastButtons = document.querySelectorAll('.forecast-button');
    const arrowButtons = document.querySelectorAll('.arrow');

    forecastButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        for (let i = 0; i < 2; i++) {
          forecastButtons[i].classList.remove('selected-button');
        }

        e.target.classList.add('selected-button');
        forecastNavController();
      });
    });

    // Add class to correct circle icon when arrow icon is clicked
    arrowButtons.forEach((button) => {
      button.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
          const circleButton = document.querySelectorAll('.circle');
          let j = i;
          if (circleButton[i].classList.contains('circle-active')) {
            if (button.classList.contains('fa-chevron-right')) {
              if (i === 2) j = -1; // If last circle icon is selected, cycle to the beginning
              circleButton[j + 1].classList.add('circle-active');
            } else {
              if (i === 0) j = 3; // If first circle icon is selected, cycle to the end
              circleButton[j - 1].classList.add('circle-active');
            }

            circleButton[i].classList.remove('circle-active');
            forecastNavController();
            break;
          }
        }
      });
    });
  }

  function renderDailyForecast(data) {
    for (let i = 1; i < 8; i++) {
      const forecastContainer = document.querySelector('.daily-forecast');

      const forecast = document.createElement('div');
      forecast.classList.add('forecast');

      const day = document.createElement('h3');
      day.textContent = getDate(data.daily[i].dt, data.timezone_offset).slice(
        0,
        3
      );

      const icon = document.createElement('img');
      icon.classList.add('weather-icon');
      icon.src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;

      const temp = document.createElement('p');
      temp.textContent = `${Math.round(data.daily[i].temp.max)}°/${Math.round(
        data.daily[i].temp.min
      )}°`;

      forecast.appendChild(day);
      forecast.appendChild(icon);
      forecast.appendChild(temp);
      forecastContainer.appendChild(forecast);
    }
  }

  function renderHourlyForecast(data) {
    for (let i = 1; i < 25; i++) {
      const hourlyForecastOne = document.querySelector('.one');
      const hourlyForecastTwo = document.querySelector('.two');
      const hourlyForecastThree = document.querySelector('.three');

      const forecast = document.createElement('div');
      forecast.classList.add('forecast');

      const day = document.createElement('h3');
      day.textContent = getDate(data.hourly[i].dt, data.timezone_offset).slice(
        17
      );

      const icon = document.createElement('img');
      icon.classList.add('weather-icon');
      icon.src = `https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`;

      const temp = document.createElement('p');
      temp.textContent = `${Math.round(data.hourly[i].temp)}°`;

      forecast.appendChild(day);
      forecast.appendChild(icon);
      forecast.appendChild(temp);

      // If hourly forecast container is holding 8 items, append to the next one
      if (i < 9) {
        hourlyForecastOne.appendChild(forecast);
      } else if (i < 17 && i >= 9) {
        hourlyForecastTwo.appendChild(forecast);
      } else {
        hourlyForecastThree.appendChild(forecast);
      }
    }
  }

  function changeBackground(data) {
    const time = data.split(',')[2].slice(0, 3);
    const body = document.getElementsByTagName('body')[0];

    if (time > 5 && time < 12) {
      body.style.backgroundImage = 'url(images/background-dawn.png)';
    } else if (time > 11 && time < 18) {
      body.style.backgroundImage = 'url(images/background-day.jpg)';
    } else if (time > 17 && time < 22) {
      body.style.backgroundImage = 'url(images/background-dusk.png)';
    } else {
      body.style.backgroundImage = 'url(images/background-night.png)';
    }
  }

  function renderWeatherData(data, city) {
    const weatherDesc = document.querySelector('.weather-desc');
    weatherDesc.textContent = formatText(data.current.weather[0].description);

    const location = document.querySelector('.location');
    location.textContent = formatText(city);

    const temperature = document.querySelector('.temperature');
    temperature.textContent = Math.round(data.current.temp);

    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

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

    changeBackground(time.textContent);
  }

  function temperatureConverter(e) {
    const location = document.querySelector('.location').textContent;
    const temp = document.querySelector('.temperature-converter');
    const feelsLikeUnit = document.querySelector('.feels-like-unit');
    const unit = document.querySelector('.unit');

    temp.classList.remove('celsius-active', 'farenheit-active');

    if (e.target.classList.contains('celsius')) {
      temp.classList.add('celsius-active');
      unit.textContent = '°C';
      feelsLikeUnit.textContent = '°C';
    } else {
      temp.classList.add('farenheit-active');
      unit.textContent = '°F';
      feelsLikeUnit.textContent = '°F';
    }

    getCityData(location, getUnit());
    clearForecast();
  }

  function temperatureController() {
    const temp = document.querySelector('.temperature-converter');

    temp.addEventListener('click', (e) => {
      temperatureConverter(e);
    });
  }

  function hideError() {
    const invalidSearch = document.querySelector('.invalid-search-container');

    invalidSearch.style.visibility = 'hidden';
  }

  function displayError() {
    const invalidSearch = document.querySelector('.invalid-search-container');

    invalidSearch.style.visibility = 'visible';

    setTimeout(hideError, 2000);
  }

  function loadSampleData() {
    getCityData('London', getUnit());
  }

  function renderData(data, city) {
    renderWeatherData(data, city);
    renderDailyForecast(data);
    renderHourlyForecast(data);
  }

  function loadPage() {
    citySearch();
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(findCity, loadSampleData);
    }
    buttonController();
    temperatureController();
  }

  return {
    forecastNavController,
    reportSearchError,
    displayError,
    renderData,
    loadPage,
  };
})();

export default domFunctions;

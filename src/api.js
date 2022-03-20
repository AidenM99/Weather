import domFunctions from './dom';

async function getWeatherData(lat, lon, city, unit = 'metric') {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const weatherData = await response.json();

    domFunctions.renderData(weatherData, city);
    domFunctions.forecastNavController();
  } catch (err) {
    domFunctions.displayError();
  }
}

async function findCity(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const locationData = await response.json();

    const city = locationData[0].name;

    getWeatherData(lat, lon, city);
  } catch (err) {
    domFunctions.displayError();
  }
}

async function getCityData(city, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const cityData = await response.json();

    const x = cityData.coord.lat;

    const y = cityData.coord.lon;

    getWeatherData(x, y, city, unit);
  } catch (err) {
    // domFunctions.reportSearchError();
    domFunctions.displayError();
  }
}

export { findCity, getCityData };

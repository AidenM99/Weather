import domFunctions from './dom';

async function getWeatherData(lat, lon, city, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const weatherData = await response.json();

    domFunctions.renderData(weatherData, city);
    domFunctions.forecastNavController();
  } catch (err) {
    console.log(err);
  }
}

export default async function getCity(city, unit) {
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
    domFunctions.reportSearchError();
    console.log(err);
  }
}

import domFunctions from './dom';

async function getWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const weatherData = await response.json();

    domFunctions.displayWeatherData(weatherData);
  } catch (err) {
    console.log(err);
  }
}

export default async function getCity(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=64dc30bda68554f9c02fcdab98258346`,
      { mode: 'cors' }
    );

    const cityData = await response.json();

    const x = cityData[0].lat;

    const y = cityData[0].lon;

    getWeatherData(x, y);
  } catch (err) {
    console.log(err);
  }
}

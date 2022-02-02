import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';

function getWeatherDesc(data) {
  return data.current.weather[0].description;
}

function getTime(data) {
  const convertFromUnix = fromUnixTime(data.current.dt + data.timezone_offset);
  const newDate = format(new Date(convertFromUnix), 'MMMM/dd/yyyy');
  console.log(newDate);
  console.log(convertFromUnix.getHours());
  console.log(convertFromUnix.getMinutes());
}

export { getWeatherDesc, getTime };

import fromUnixTime from 'date-fns/fromUnixTime';

function formatText(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}

function getDate(time, offset) {
  const date = fromUnixTime(time + offset).toUTCString();
  return `${date.slice(0, 16)}, ${date.slice(17, 22)}`;
}

export { formatText, getDate };

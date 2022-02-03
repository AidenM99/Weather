import fromUnixTime from 'date-fns/fromUnixTime';

function capitalise(desc) {
  if (desc.indexOf(' ') >= 0) {
    return desc
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }
  return desc.charAt(0).toUpperCase() + desc.slice(1);
}

function getDate(time, offset) {
  const date = fromUnixTime(time + offset).toUTCString();
  return `${date.slice(0, 16)}, ${date.slice(17, 22)}`;
}

export { capitalise, getDate };

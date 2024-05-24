function timeWithLeadingZero(minutes) {
  const hours = Math.floor(minutes / 60);
  const lZHours = hours < 10 ? '0' : hours == 10 ? '00' : '';

  const restMinutes = minutes % 60;
  const lZMinutes = restMinutes < 10 ? '0' : restMinutes == 10 ? '00' : '';

  const hoursMinutes = `${lZHours}${hours}:${lZMinutes}${restMinutes}`;

  return hoursMinutes;
};

console.log(timeWithLeadingZero(60));
console.log(timeWithLeadingZero(90));
console.log(timeWithLeadingZero(325));
console.log(timeWithLeadingZero(2));
console.log(timeWithLeadingZero(55));
console.log(timeWithLeadingZero(68));

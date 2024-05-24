function time(minutes) {
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;
  const hoursMinutes = `${hours}:${restMinutes}`;

  return hoursMinutes;
};

console.log(time(60));
console.log(time(90));
console.log(time(325));
console.log(time(68));

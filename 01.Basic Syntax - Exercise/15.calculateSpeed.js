function calculateSpeed(distance, hours, minutes, seconds) {
  const time = seconds + minutes*60 + hours*60*60;
  const speed = distance / time; //meters per second

  console.log(speed.toFixed(6));
};

calculateSpeed(100, 1, 20, 20);
calculateSpeed(2500, 5, 56, 23);
calculateSpeed(600, 7, 35, 55);

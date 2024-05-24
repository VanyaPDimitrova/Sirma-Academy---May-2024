
function averageSpeed(distance, time) {
  const speed = distance / time;

  return speed.toFixed(2);
};

console.log(averageSpeed(200, 2));
console.log(averageSpeed(150, 3));
console.log(averageSpeed(300, 5));

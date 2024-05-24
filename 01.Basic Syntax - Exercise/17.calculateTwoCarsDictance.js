function calculateTwoCarsDistance (speedCar1, speedCar2) {
  const distanceCar1 = speedCar1 * 5;
  const distanceCar2 = speedCar2 * 3;

  return Math.abs(distanceCar1 - distanceCar2);
};

console.log(calculateTwoCarsDistance(81, 120));
console.log(calculateTwoCarsDistance(100, 90));
console.log(calculateTwoCarsDistance(75, 90));

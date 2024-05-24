function fuelEfficiency(totalDistance,totalFuel) {
  return (totalDistance/totalFuel).toFixed(2);
};

console.log(fuelEfficiency(500, 40));
console.log(fuelEfficiency(600, 40));
console.log(fuelEfficiency(750, 40));

function calculateMonthlyElectricityBill(units, rate) {
  return (units*rate + 10).toFixed(2);
};

console.log(calculateMonthlyElectricityBill(100, 1.0));
console.log(calculateMonthlyElectricityBill(200, 1.0));
console.log(calculateMonthlyElectricityBill(150, 1.1));

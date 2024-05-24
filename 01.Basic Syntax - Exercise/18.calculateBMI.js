function calculateBMI(weight, height) {
  const BMI = weight / height;

  return BMI.toFixed(2);
};

console.log(calculateBMI(70, 1.73));
console.log(calculateBMI(60, 1.75));
console.log(calculateBMI(85, 1.80));

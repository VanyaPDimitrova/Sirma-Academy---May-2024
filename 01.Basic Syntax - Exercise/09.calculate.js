function calculate(numOne, numTwo) {
  const sum = numOne + numTwo;
  console.log('Sum: ' + sum);

  const difference = Math.abs(numOne - numTwo);
  console.log('Difference: ' + difference);

  const multiplication = numOne*numTwo;
  console.log('Product: ' + multiplication);

  const arithmeticMean = (numOne + numTwo)/2;
  console.log('Average: ' + arithmeticMean);
}

calculate(25, 5);
console.log('------------------');
calculate(7, 14);
console.log('------------------');
calculate(12, 1);


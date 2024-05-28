function negativePositiveNumbers(numbers) {
  const result = [];
  
  for (const number of numbers) {
    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }

  return result.join(`\n`);
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));
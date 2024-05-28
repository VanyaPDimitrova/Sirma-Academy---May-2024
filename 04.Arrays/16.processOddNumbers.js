function processOddNumbers(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (i % 2 != 0) {
      result.unshift(2*el);
    }
  }

  return result.join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
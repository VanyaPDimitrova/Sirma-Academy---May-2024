function addAndSubtract(m, n, k) {
  const sumFirstTwo = sum(m, n);
  const subtractFromSumThird = sumFirstTwo - k;

  return subtractFromSumThird;
}

function sum(m, n) {
  return m + n;
}

function subtract(a, b) {
  return a - b;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));

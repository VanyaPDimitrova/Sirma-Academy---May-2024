function factorialDivision(m, n) {
  const division = factorial(m) / factorial(n);

  return division.toFixed(2);
}
 
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * factorial(n-1);
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));

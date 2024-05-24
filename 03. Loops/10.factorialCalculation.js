function factorialCalculation(n) {
  let factorial = 1;

  if (n == 0) {
    console.log(1);
  } else {
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }

    console.log(factorial);
  }
}

factorialCalculation(0);
factorialCalculation(3);
factorialCalculation(1);
factorialCalculation(5);
factorialCalculation(10);

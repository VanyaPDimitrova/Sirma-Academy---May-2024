function fibonacciSequenceSum(n) {
  let fi = 0;
  let sum = fi;
  let fj = 1;

  for (let i = 1; i <= n; i++) {
    sum += fj;
    let fk = fi + fj;
    fi = fj;
    fj = fk;
  }

  console.log(sum);
}

fibonacciSequenceSum(3);
fibonacciSequenceSum(5);
fibonacciSequenceSum(1);
fibonacciSequenceSum(0);
fibonacciSequenceSum(10);
fibonacciSequenceSum(2);
fibonacciSequenceSum(4);
fibonacciSequenceSum(6);


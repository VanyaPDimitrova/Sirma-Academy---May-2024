function numberReversal(n) {
  let reversN = 0;

  while (n > 0) {
    let m = n % 10;
    n = Math.floor(n/10);
    reversN = reversN*10 + m;
  }

  console.log(reversN);
}

numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);

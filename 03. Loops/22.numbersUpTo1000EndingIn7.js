function printNumbersUpTo1000EndingIn7() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}

numbersUpTo1000EndingIn7();

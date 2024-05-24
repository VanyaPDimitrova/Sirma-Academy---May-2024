function sumOfEvenNumbers(n) {
  let sum = 0;
  let evenNum = 2;

  for (let i = 0; i < n; i++) {
    sum += evenNum;
    evenNum += 2;
  }

  console.log(sum);
}

sumOfEvenNumbers(3);
sumOfEvenNumbers(5);
sumOfEvenNumbers(1);
sumOfEvenNumbers(0);
sumOfEvenNumbers(10);
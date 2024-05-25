function equalSumOfOddAndEvenPositions(num1 = 0, num2) {
  const equals = [];

  for (let i = num1 + 1; i < num2; i++) {
    let num = Array.from(i.toString()).map(num => Number(num));

    let oddSum = num[0] + num[2] + num[4];
    let evenSum = num[1] + num[3] + num[5];

    if (evenSum == oddSum) {
      equals.push(i);
    }
  }

  if (equals.length == 0) {
    console.log('None');
  } else {
    console.log(equals.join(`\n`));
  }
}

equalSumOfOddAndEvenPositions(100000, 100050);
equalSumOfOddAndEvenPositions(299900, 300000);
equalSumOfOddAndEvenPositions(100115, 100120);

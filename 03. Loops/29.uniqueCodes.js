function generatesThreeDigitCodes(firstLimit, secondLimit, thirdLimit) {
  const secondDigitRange = [2, 3, 5, 7];
  const secondDigits = secondDigitRange.filter(number => number <= secondLimit);

  for (let i = 2; i <= firstLimit; i+=2) {
    for (let j = 0; j < secondDigits.length; j++) {
      for (let k = 2; k <= thirdLimit; k+=2) {
        const code = [];

        code.push(i);
        code.push(secondDigits[j]);
        code.push(k);

        console.log(code.join(' '));
      }
    }
  }
}

generatesThreeDigitCodes(3, 5, 5);
generatesThreeDigitCodes(6, 2, 6);
generatesThreeDigitCodes(1, 1, 1);
generatesThreeDigitCodes(1, 2, 2);
generatesThreeDigitCodes(2, 1, 2);
generatesThreeDigitCodes(2, 2, 1);
generatesThreeDigitCodes(9, 9, 9);

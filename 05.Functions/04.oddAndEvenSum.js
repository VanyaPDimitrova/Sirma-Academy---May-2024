function oddAndEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;

  while (number > 0) {
    let digit = number % 10;

    isOddNumber(digit) ? oddSum += digit : evenSum += digit;

    number = Math.floor(number / 10);
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

function isOddNumber(number) {
  return number % 2 != 0;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));

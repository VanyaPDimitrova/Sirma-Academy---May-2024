function isPerfectNumber(number) {
  const isInteger = (num) => {
    const n = Math.abs(num);
    return  n == Math.floor(n);
  };
  const isPositive = (num) => num > 0;
  const isNumberDivisor = (divisor) => number % divisor == 0;
  const isEven = (num) => num % 2 == 0;
  
  if (isPositive(number) && isInteger(number)) {
    let half = Math.floor(number / 2);
    const divisors = isEven(number) ? [1, 2] : [1];

    while (half > 2) {
      if (isNumberDivisor(half)) {
        divisors.push(half);
        if (isEven(half)) {
          half /= 2;
        } else {
          half--
        }

      } else { 
        half--;
      }
    }

    const isPerfect = number == divisors.reduce((acc, el) => acc += el);

    return isPerfect ? `Perfect number!\n${divisors.sort((a, b) => Number(a) - Number(b))
                                                   .join(' + ')}`
                     : 'It’s not so perfect.';

  } else {
    return 'It’s not so perfect.';
  }
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(56));
console.log(isPerfectNumber(34));
console.log(isPerfectNumber(1236498));

// const n = 100000;
// const perfectNumbers = [];

// for (let i = 5; i < n; i++) {
//   if (!perfectNumbers.includes(i)) {
//     if (isPerfectNumber(i)) {
//       perfectNumbers.push(i);
//       perfectNumbers.push('z');
//       let j=i*2;

//       while (j < n) {
//         perfectNumbers.push(j);
//         j *= 2;
//       }
//     }
//   }
// }

// console.log(perfectNumbers);

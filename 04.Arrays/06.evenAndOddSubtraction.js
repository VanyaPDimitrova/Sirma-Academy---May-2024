function evenAndOddSubtraction(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (const num of arr) {
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return sumEven - sumOdd;
}

console.log(evenAndOddSubtraction([1,2,3,4,5,6]));
console.log(evenAndOddSubtraction([3,5,7,9]));
console.log(evenAndOddSubtraction([2,4,6,8,10]));

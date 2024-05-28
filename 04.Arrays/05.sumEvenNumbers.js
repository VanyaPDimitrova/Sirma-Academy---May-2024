function sumEvenNumbers(arr) {
  const numberArray = arr.map(el => Number(el));
  let sumEven = 0;

  for (const num of numberArray) {
    if (num % 2 == 0) {
      sumEven += num;
    }
  }

  return sumEven;
} 

console.log(sumEvenNumbers(['1','2','3','4','5','6']));
console.log(sumEvenNumbers(['3','5','7','9']));
console.log(sumEvenNumbers(['2','4','6','8','10']));

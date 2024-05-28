function firstAndLastKNumbers(k, numbers) {
  const firstK = [];
  const lastK = [];
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    let num = numbers[i];

    if (i < k) {
      firstK.push(num);
    }

    if (i >= length-k) {
      lastK.push(num);
    }
  }
  
  return firstK.join(' ') + `\n` + lastK.join(' ');
}

console.log(firstAndLastKNumbers(2, [7, 8, 9]));
console.log(firstAndLastKNumbers(3, [6, 7, 8, 9]));


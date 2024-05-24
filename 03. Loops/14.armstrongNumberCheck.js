function armstrongNumberCheck(num) {
  const power = num.toString().length;
  let number = num;
  let sum = 0;

  while (number > 0) {
    let base = number % 10;
    sum += Math.pow(base, power);
    number = Math.floor(number / 10);
  }

  const output = sum == num ? 'Armstrong' : 'Not Armstrong';
  console.log(output);
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);
armstrongNumberCheck(1634);

function sumFirstAndLastArrayElement(arr = []) {
  const sumFirstLastElement = Number(arr.shift()) + Number(arr.pop());

  console.log(sumFirstLastElement);
}

sumFirstAndLastArrayElement(['20', '30', '40']);
sumFirstAndLastArrayElement(['10', '17', '22', '33']);
sumFirstAndLastArrayElement(['11', '58', '69']);

function reverseAnArrayOfNumbers(n, array) {
  const newArr = [];
  n = n > array.length ? array.length : n;

  for (let i = 0; i < n; i++) {
    const element = array[i];
    newArr.unshift(element);
  }

  console.log(newArr.join(' '));
}

// version 2
function reverseAnArrayOfNumbers2(n, array) {
  const newArr = [];

  for (let i = 0; i < n; i++) {
    if (i == array.length) {
      i = 0;
      n = n - array.length;
    }
    const element = array[i];
    newArr.unshift(element);
  }

  console.log(newArr.join(' '));
}

reverseAnArrayOfNumbers(6, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(2, [10, 20, 30, 40, 50]);

// reverseAnArrayOfNumbers2(7, [10, 20, 30, 40, 50]);
// reverseAnArrayOfNumbers2(3, [10, 20, 30, 40, 50]);

function pyramidOfNumbers(n) {
  let m = 1;
  let k = 1;

  for (let i = k; i <= n; i=k) {
    const nums = [];
    for (let j = 0; j < m; j++) {
      if (i + j > n) {
        break;
      }
      nums.push(i + j);
      k++;
    }

    m++;
    console.log(nums.join(' '));
  }
}

pyramidOfNumbers(1);
pyramidOfNumbers(2);
pyramidOfNumbers(3);

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(12);

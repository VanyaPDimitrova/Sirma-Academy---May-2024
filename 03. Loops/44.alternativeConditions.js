function pyramidOfNumbers2(n) {
  let m = 1;
  let k = 1;
  const pyramid = [];
  let maxLength = 0;

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
    if (nums.length > maxLength) {
      maxLength = nums.length;
    }
    pyramid.push(nums);
  }

  for (const row of pyramid) {
    const len = maxLength - row.length;
    for (let i = 0; i < len; i++) {
      row.unshift(' ');
    }
  }

  for (let i = 0; i < pyramid.length; i++) {
    console.log(pyramid[i].join(' '));
  }
}

function pyramidOfNumbers3(n) {
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

pyramidOfNumbers2(7);
pyramidOfNumbers2(10);
pyramidOfNumbers2(12);
pyramidOfNumbers2(13);
pyramidOfNumbers2(14);
pyramidOfNumbers2(15);

// pyramidOfNumbers3(7);
// pyramidOfNumbers3(10);
// pyramidOfNumbers3(12);



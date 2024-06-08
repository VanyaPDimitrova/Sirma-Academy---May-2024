function countingOrcs(n, m, h) {
  let totalNumberOrcsFought = 0;

  if (0 < h && h < 1) {
    totalNumberOrcsFought = n*h;

  } else if (1 <= h) {
    let decimalPortion = h - Math.floor(h);

    if (decimalPortion != 0) {
      h = Math.floor(h);
    }

    for (let i = 0; i < h; i++) {
      totalNumberOrcsFought += n + i*m;
    }

    totalNumberOrcsFought += (n + h * m) * decimalPortion;
  }

  console.log(totalNumberOrcsFought);
}

countingOrcs(5, 2, 0);
countingOrcs(5, 2, 0.5);
countingOrcs(7, 1, 2.75);
countingOrcs(5, 2, 3);
countingOrcs(7, 1, 2);
countingOrcs(10, -1, 1);
countingOrcs(8, -2, 3);

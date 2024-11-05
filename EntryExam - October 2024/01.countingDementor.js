function countingDementors(n, m, h) {
  let totalDementorsFought = 0;

  if (0 < h && h < 1) {
    totalDementorsFought = n*h;

  } else if (1 <= h) {
    let partHour = h - Math.floor(h);

    if (partHour != 0) {
      h = Math.floor(h);
    }

    totalDementorsFought = h*(n + m*(h-1)/2);

    totalDementorsFought += (n + h * m) * partHour;
  }

  console.log(Math.round(totalDementorsFought * 100) / 100);
}

countingDementors(5, 2, 3); // 21
countingDementors(7, 1, 2); // 15
countingDementors(10, -1, 1); // 10
countingDementors(8, -2, 3); // 18
countingDementors(8, 3, 0); // 0
countingDementors(4, 1, 0.5); // 2
countingDementors(10, 2, 8.75); // 155.5
countingDementors(5, 1.5, 4.19); // 31.09

function hollowRectanglePattern(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    if (i == 1 || i == rows) {
      console.log('*'.repeat(columns));
    } else {
      console.log('*' + ' '.repeat(columns - 2) + '*');
    }
  }
}

hollowRectanglePattern(4, 6);
hollowRectanglePattern(2, 2);
hollowRectanglePattern(3, 4);

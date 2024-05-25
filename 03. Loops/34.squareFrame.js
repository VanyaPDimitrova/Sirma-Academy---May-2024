function squareFrame(n) {
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n-1) {
        if (j == 0 || j == n-1){
          row.push('+');
        } else {
          row.push('-');
        }
      } else {
        if (j == 0 || j == n-1){
          row.push('|');
        } else {
          row.push('-');
        }
      }
    }
    console.log(row.join(' '));
  }
  console.log('_________________');
}

squareFrame(1);
squareFrame(2);
squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);

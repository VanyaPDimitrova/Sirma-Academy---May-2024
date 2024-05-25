function sunglasses(n) {
  for (let i = 0; i < n; i++) {
    const row = [];
    let asterisks = [];

    if (i == 0 || i == n-1) {
      for (let j = 0; j < 2*n; j++) {
        asterisks.push('*');
      }
    } else {
      for (let j = 0; j < 2*n; j++) {
        if (j == 0 || j == 2*n-1){
          asterisks.push('*');
        } else {
          asterisks.push('/');
        }
      }
    }

    let rowStart = asterisks.join('');

    let isMiddleRow = i == Math.ceil(n/2) - 1 && i != 0 && i != n-1;
    let rowEnd = asterisks.join('').padStart(3*n,`${isMiddleRow ? '|' : ' '}`);

    row.push(rowStart + rowEnd);
    console.log(row.join(' '));
  }
}

sunglasses(1);
sunglasses(2);
sunglasses(3);
sunglasses(4);
sunglasses(5);
sunglasses(6);
sunglasses(7);

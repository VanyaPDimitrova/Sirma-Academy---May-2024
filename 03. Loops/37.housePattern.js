function housePattern(n) {
  let start = n % 2 == 0 ? 2 : 1;

  for (let i = start; i <= n; i+=2) {
    const row = [];
    for (let k = 0; k <= (n-i)/2-1; k++) {
      row.push(' ');
    }
    for (let j = 0; j < i; j++) {
      row.push('*');
    }

    console.log(row.join(''));
  }

  for (let i = 0; i < 2; i++) {
    const row = ['*'];

    for (let j = 1; j < n-1; j++) {
      row.push(' ');
    }

    row.push('*');

    console.log(row.join(''));
  }
}

housePattern(7);
housePattern(4);
housePattern(3);
housePattern(6);

function hourglassPattern(n) {
  const rows = 2*Math.ceil(n/2)-1+2;
  const columns = n+2;
  const firstLastRow = [];

  for (let j = 0; j < columns; j++) {
    firstLastRow.push('#');
  }

  console.log(firstLastRow.join(''));

  for (let i = 1; i <= Math.ceil(n/2); i++) {
    const row = [];

    for (let k = 1; k <= i; k++) {
      row.push(' ');
    }

    row.push('#');

    for (let k = 1; k <= columns-2*i-2; k++) {
      row.push(' ');
    }
    
    if (!(i == Math.ceil(n/2) && n % 2 != 0)) {
      row.push('#');
    }

    for (let k = 1; k <= i; k++) {
      row.push(' ');
    }

    console.log(row.join(''));
  } 


  const rowCount = Math.ceil(n/2) - 1;

  for (let i = rowCount; i >= 1; i--) {
    const row = [];

    for (let k = 1; k <= i; k++) {
      row.push(' ');
    }

    row.push('#');

    for (let k = 1; k <= columns-2-2*i; k++) {
      row.push(' ');
    }
    
    row.push('#');

    for (let k = 1; k <= i; k++) {
      row.push(' ');
    }

    console.log(row.join(''));
  }

  console.log(firstLastRow.join(''));
}
hourglassPattern(1);
hourglassPattern(2);
hourglassPattern(3);
hourglassPattern(4);
hourglassPattern(5);
hourglassPattern(6);
hourglassPattern(7);
hourglassPattern(8);

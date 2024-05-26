function arrowPattern(n) {
  for (let i = 1; i < n; i++) {
    const row = [];

    for (let j = 0; j < i; j++) {
      row.push('*');
    }

    console.log(row.join(' ').padStart(n+i-2,' '));
  }

  for (let i = 0; i < n-1; i++) {
    const row = [];
    const asterisksCount = n % 2 == 0 ? n-1 : n-2;
    const spacesCount = (n-1 + n-2 - asterisksCount)/2;

    for (let j = 0; j < spacesCount; j++) {
      row.push(' ');
    }
    for (let j = 0; j < asterisksCount; j++) {
      row.push('*');
    }

    console.log(row.join(''));
  }
}

arrowPattern(7);
// arrowPattern(4);
// arrowPattern(6);

function leftArrowPattern(n) {
  for (let i = 1; i <= n; i++) {
    const asterisks = [];
    for (let j = 0; j < i; j++) {
      asterisks.push('*');
    } 
    console.log(asterisks.join('').padStart(n, ' '));
  }

  for (let i = n - 1; i >= 1; i--) {
    const asterisks = [];
    for (let j = 0; j < i; j++) {
      asterisks.push('*');
    } 
    console.log(asterisks.join('').padStart(n, ' '));
  }
}

leftArrowPattern(4);
leftArrowPattern(5);
leftArrowPattern(10);

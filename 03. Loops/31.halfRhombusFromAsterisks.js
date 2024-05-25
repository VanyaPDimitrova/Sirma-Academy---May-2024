function halfRhombusFromAsterisks(n) {
  for (let i = 1; i <= n; i++) {
    const asterisks = [];
    for (let j = 0; j < i; j++) {
      asterisks.push('*');
    } 
    console.log(asterisks.join(' '));
  }

  for (let i = n - 1; i >= 1; i--) {
    const asterisks = [];
    for (let j = 0; j < i; j++) {
      asterisks.push('*');
    } 
    console.log(asterisks.join(' '));
  }
}

halfRhombusFromAsterisks(1);
console.log('____________');
halfRhombusFromAsterisks(2);
console.log('____________');
halfRhombusFromAsterisks(3);
console.log('____________');
halfRhombusFromAsterisks(4);

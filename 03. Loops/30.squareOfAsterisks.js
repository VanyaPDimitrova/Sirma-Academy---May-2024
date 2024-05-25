function squareOfAsterisks(n) {
  const arr = Array.from({ length: n }, () => '*');

  const matrix = arr.reduce((acc, value, index, arr) => {
    acc.push(arr.join(' '));
    return acc;
  }, []);

  console.log(matrix.join(`\n`));
}

squareOfAsterisks(2);
squareOfAsterisks(3);

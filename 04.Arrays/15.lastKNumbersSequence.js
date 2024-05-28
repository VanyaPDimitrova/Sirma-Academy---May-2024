function lastKNumbersSequence(n, k) {
  const result = [1];

  for (let i = 0; i < n-1; i++) {
    let slice = result.slice(-k);
    let newElement = slice.reduce((acc, el) => acc + el, 0);
    result.push(newElement);
  }
  
  return result.join(' ');
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));

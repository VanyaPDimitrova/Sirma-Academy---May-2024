function rotateArray(array, n) {
  const rotatedArray = array.slice();

  for (let i = 0; i < n; i++) {
    let element = array.pop();

    array.unshift(element);
  }

  return array.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));

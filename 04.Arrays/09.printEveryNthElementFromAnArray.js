function printEveryNthElementFromAnArray(array, n) {
  const collection = [];

  for (let i = 0; i < array.length; i+=n) {
    collection.push(array[i]);
  }

  return collection.join(' ');
}

console.log(printEveryNthElementFromAnArray(['5', '15', '31', '14', '20'], 2));
console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'demo', 'test'], 2));
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6));
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 4));
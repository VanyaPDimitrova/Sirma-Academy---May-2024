function listOfProducts(array = []) {
  return array.slice()
              .sort()
              .map((el, i) => i+1 + '.' + el)
              .join('\n');
}

console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
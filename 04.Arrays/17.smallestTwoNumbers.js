function smallestTwoNumbers(array = []) {
  return array.slice()
              .sort((a, b) => Number(a) - Number(b))
              .slice(0, 2)
              .join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
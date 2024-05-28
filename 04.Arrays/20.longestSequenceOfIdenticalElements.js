function longestSequenceOfIdenticalElements(...numbers) {
  let longestSequence = [];
  let currentSequence = [numbers[0]];
  let currentLength = currentSequence.length;

  for (let i = 1; i < numbers.length; i++) {
    let number = numbers[i];
    
    if (number == currentSequence[currentLength-1]) {
      currentSequence.push(number);
    } else {
      currentSequence = [number];
    }    

    longestLength = longestSequence.length;
    currentLength = currentSequence.length;
    
    if (currentLength >= longestLength) {
      longestSequence = currentSequence.slice();
    }
  }
  
  return longestSequence.join(' ');
}

console.log(longestSequenceOfIdenticalElements(2, 2, 2, 3, 4, 4, 2, 2, 2, 1));
console.log(longestSequenceOfIdenticalElements(1, 1, 1, 2, 3, 1, 3, 3, 1, 1));
console.log(longestSequenceOfIdenticalElements(1, 1, 2, 3, 4, 5, 6, 2, 2));
console.log(longestSequenceOfIdenticalElements(4, 4, 4, 4));
console.log(longestSequenceOfIdenticalElements(0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5));

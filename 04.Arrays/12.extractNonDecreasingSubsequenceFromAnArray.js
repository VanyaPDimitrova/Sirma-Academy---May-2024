function extractNonDecreasingSubsequenceFromAnArray(array) {
  const result = [array[0]];
  let maxNum = array[0];

  for (let i = 1; i < array.length; i++) {
    let num = array[i];

    if (num >= maxNum) {
      result.push(num);
      maxNum = num;
    }
  }

  return result.join(' ');
}

console.log(extractNonDecreasingSubsequenceFromAnArray([ 1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractNonDecreasingSubsequenceFromAnArray([ 1, 2, 3, 4]));
console.log(extractNonDecreasingSubsequenceFromAnArray([ 20, 3, 2, 15, 6, 1]));
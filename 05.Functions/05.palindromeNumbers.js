function palindromeNumbers(integers) {
  const isPalindromeInteger = [];

  for (const integer of integers) {
    isPalindromeInteger.push(isPalindrome(integer));
  }

  return isPalindromeInteger.join(`\n`);
}

function isPalindrome(number) {
  const reversedNumber = number.toString().split('').reverse().join('');
  
  return Number(reversedNumber) == number;
}

console.log(palindromeNumbers([123, 323, 421, 121]));
console.log('___________');
console.log(palindromeNumbers([32, 2, 232, 1010]));

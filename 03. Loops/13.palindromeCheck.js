function palindromeCheck(str = '') {
  let isPalindrome = true;
  let len = str.length;
  
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      isPalindrome = false;
    }
  }

  console.log(isPalindrome);
}

palindromeCheck('radar');
palindromeCheck('hello');
palindromeCheck('racecar');
palindromeCheck('java');
palindromeCheck('madam');

function passwordValidator(password) {
  if (!isValidLength(password)) {
    return 'Password must be between 6 and 10 characters';
  } 

  if (!isConsistsOnlyDigitAndLetter(password)) {
    return 'Password must consist only of letters and digits';
  }

  if (!haveAtLeast2Digits(password)) {
    return 'Password must have at least 2 digits';
  }

  return 'Password is valid';
}

function isValidLength(password, minLength = 6, maxLength = 10) {
  const length = password.length;

  return minLength <= length && length <= maxLength;
}
function isConsistsOnlyDigitAndLetter(password) {
  let isOnlyDigitAndLetter = true;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (!(isDigit(char) || isLetter(char))) {
      isOnlyDigitAndLetter = false;
    }
  }

  return isOnlyDigitAndLetter;
}
function haveAtLeast2Digits(password) {
  let digitCount = 0;
  let have2Digit = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (isDigit(char)) {
      digitCount++;
    }

    if (digitCount == 2) {
      have2Digit = true;
    }
  }

  return have2Digit;
}
function isDigit(char) {
  const asciiChar = char.charCodeAt(0);

  return 48 <= asciiChar && asciiChar <= 57;
}
function isLetter(char) {
  const asciiChar = char.charCodeAt(0);
 
  return (65 <= asciiChar && asciiChar <= 90) || (97 <= asciiChar && asciiChar <= 122);
}


console.log(passwordValidator('pass'));
console.log(passwordValidator('APass123'));
console.log(passwordValidator('Pa$s$s'));
console.log(passwordValidator('Password1'));

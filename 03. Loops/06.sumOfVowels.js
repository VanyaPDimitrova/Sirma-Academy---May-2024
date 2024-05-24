function sumOfVowels(text = '') {
  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
  const textToLower = text.toLowerCase();
  let sum = 0;

  for (let i = 0; i < textToLower.length; i++) {
    let index = vowelLetters.indexOf(textToLower[i]);
    
    if (index >= 0) {
      sum += index + 1;
    }
  }

  console.log(sum);
}

sumOfVowels('hello');
sumOfVowels('hi');
sumOfVowels('bye');
sumOfVowels('zzz');
sumOfVowels('HeLLo');

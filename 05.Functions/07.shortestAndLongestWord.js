function shortestAndLongestWord(sentence) {
  sentence = sentence.trim();
  let words = sentence.split(' - ').join(' ').split(/[\s,.!"?:;'-+<>=]+/);
  
  let shortestWord = words[0];
  let longestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length && word.length > 0) {
      shortestWord = word;
    }

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `Longest -> ${longestWord}\nShortest -> ${shortestWord}`;
}


console.log(shortestAndLongestWord(`   The: quick? !br-own" - 'fox' jumps; over, "the" lazy dog.    `));
console.log(shortestAndLongestWord('Hello how are you today? I hope you are fine '));
console.log(shortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.'));
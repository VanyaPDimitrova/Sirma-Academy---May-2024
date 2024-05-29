function charactersInRange(char1 = '', char2) {
  const characters = [];
  const asciiChar1 = char1.charCodeAt(0);
  const asciiChar2 = char2.charCodeAt(0);
  const minMaxAsciiCode = asciiChar1 < asciiChar2 ? [asciiChar1, asciiChar2] : [asciiChar2, asciiChar1];
  
  for (let i = minMaxAsciiCode[0] + 1; i < minMaxAsciiCode[1]; i++) {
    characters.push(String.fromCharCode(i));
  }
  
  return characters.join(' ');
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));

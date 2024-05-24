function paint(yellow) {  
  const output = [`Yellow: ${yellow}`];
  output.unshift(`Red: ${yellow / 4}`)
  output.push(`White: ${2 * yellow}`)
  output.push(`Total: ${yellow + yellow / 4 + 2 * yellow}`);

  return output.join(`\n`);
};

console.log(paint(10));
console.log('---------------');
console.log(paint(17));
console.log('---------------');
console.log(paint(42));

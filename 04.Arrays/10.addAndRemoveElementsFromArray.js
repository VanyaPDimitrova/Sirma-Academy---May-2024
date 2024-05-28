function addAndRemoveElementsFromArray(commands) {
  const resultArr = [];
  let number = 0;

  for (const command of commands) {
    number++;
    if (command == 'add') {
      resultArr.push(number);
      
    } else if (command == 'remove') {
      resultArr.pop();
    }
  }

  return resultArr.length == 0 ? 'Empty' : resultArr.join(' ');
}

console.log(addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemoveElementsFromArray(['remove', 'remove', 'remove']));
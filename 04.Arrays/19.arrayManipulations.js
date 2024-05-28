function arrayManipulations(array = []) {
  const result = array[0].split(' ');
  const commands = array.slice(1);
  
  for (const row of commands) {
    const manipulation = row.split(' ');
    let command = manipulation[0];
    let number = manipulation[1];
    let index = manipulation[2];

    switch (command) {
      case 'Add':
        result.push(number);
        break;
      case 'Remove':
        let i = result.indexOf(number);
        if (i >= 0) {
          result.splice(i, 1);
        }
        break;
      case 'RemoveAt':
        result.splice(number, 1);
        break;
      case 'Insert':
        result.splice(index, 0, number);
        break;
    }
  }

  return result.join(' ');
}

console.log(arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']));

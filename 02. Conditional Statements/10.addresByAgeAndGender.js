function printAddress(age, gender) {
  let address = '';

  if (age < 16) {
    address = gender == 'm' ? 'Master' : 'Miss';
  } else {
    address = gender == 'm' ? 'Mr.' : 'Ms.';
  }

  console.log(address);
}

printAddress(14, 'f');
printAddress(17, 'm');
printAddress(10, 'm');
printAddress(32, 'f');

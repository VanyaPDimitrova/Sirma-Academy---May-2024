function isInRange(number) {
  if (-100 <= number && number <= 100 && number != 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

isInRange(-25);
isInRange(0);
isInRange(25);
isInRange(-100);
isInRange(100);
isInRange(-108);
isInRange(225);

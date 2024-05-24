function magicNumber(beginInterval, endInterval, magicNumber) {
  let count = 0;
  let isMagic = false;

  for (let i = beginInterval; i <= endInterval; i++) {
    for (let j = beginInterval; j <= endInterval; j++) {
      count ++;
      isMagic = i + j == magicNumber;

      if (isMagic) {
        console.log(`Combination ${count} - (${i} + ${j} = ${i + j})`);
        return;
      }
    }

    if (!isMagic && i == endInterval) {
      console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
  }
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
magicNumber(1, 2, 5);
magicNumber(1, 1000, 10000);
magicNumber(999, 1000, 10000);
magicNumber(999, 1000, 2000);

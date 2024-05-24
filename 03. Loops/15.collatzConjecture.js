function collatzConjecture(n) {
  const collatzSequence = [n];

  while (n > 1) {
    if (n % 2 == 0) {
      n = n/2;
      collatzSequence.push(n);
    } else {
      n = n*3 + 1;
      collatzSequence.push(n);
    }
  }

  console.log(collatzSequence.join(' '));
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);

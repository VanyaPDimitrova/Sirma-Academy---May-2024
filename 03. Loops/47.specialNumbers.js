function specialNumbers(n) {
  const div = [];

  for (let i = 0; i < 9; i++) {
    if (n % i == 0) {
      div.push(i);
    }
  }

  const len = div.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        for (let l = 0; l < len; l++) {
          console.log('' + div[i] + div[j] + div[k] + div[l]);
        }
      }
    }
  }
}

specialNumbers(3);
specialNumbers(16);

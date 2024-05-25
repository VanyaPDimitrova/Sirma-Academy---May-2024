function passwordGenerator(n, l) {
  const dec = Math.min(26, l);
  const password = [];

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      for (let k = 97; k < 97 + dec; k++) {
        for (let l = 97; l < 97 + dec; l++) {
          for (let m = 1; m <= n; m++) {
            let third = String.fromCharCode(k);
            let fourth = String.fromCharCode(l);

            if (m > i && m > j) {
              password.push(i.toString() + j + third + fourth + m);
            }
          }
        }
      }
    }
  }

  console.log(password.join(`\n`));
}

passwordGenerator(2, 4);
passwordGenerator(3, 1);

  function sumOddNumbers(n){
    let sum = 0;

    for (let i = 0; i < n; i++) {
      console.log(2 * i + 1);
      sum += 2 * i + 1;
    }

    console.log(`Sum: ${sum}`);
  }

  sumOddNumbers(5);
  sumOddNumbers(3);

function printGeneratedPrimePairs(firstInitValue, secondInitValue, firstDiff, secondDiff) {
  const firstFinalValue = firstInitValue + firstDiff;
  const secondFinalValue = secondInitValue + secondDiff;
  const maxN = Math.max(firstFinalValue, secondFinalValue);
  const primes = sieveOfEratosthenes(maxN);

  const firstPrimes = [];
  const secondPrimes = [];
  
  for (let i = 0; i < primes.length; i++) {
    let num = primes[i];

    if (firstInitValue <= num && num <= firstFinalValue) {
      firstPrimes.push(num);
    }

    if (secondInitValue <= num && num <= secondFinalValue) {
      secondPrimes.push(num);
    }
  }

  for (let i = 0; i < firstPrimes.length; i++) {
    for (let j = 0; j < secondPrimes.length; j++) {
      console.log(`${firstPrimes[i]}${secondPrimes[j]}`);   
    }
  }
}

printGeneratedPrimePairs(10, 20, 5, 5);
printGeneratedPrimePairs(10, 30, 9, 6);

// find prime numbers in range [2, n]
function sieveOfEratosthenes(n) {
  const numbersToN = Array.from({length: n - 1}, (value, index) => index + 2);

  for (i = 0; numbersToN[i]**2 <= n; i++) {
    let num = numbersToN[i];

    for (j = num**2; j <= n; j+=num) {
      let index = numbersToN.indexOf(j);

      if (index > -1) {
        numbersToN.splice(index, 1);
      }
    }
  }

 return numbersToN;
}

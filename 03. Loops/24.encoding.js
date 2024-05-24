function encoding(num) {
  while (num > 0) {
    let n = num % 10;
    
    if (n == 0) {
      console.log('ZERO');
    } else {
      const char = String.fromCharCode(n + 33);
      console.log(''.padStart(n, char));
    }
    
    num = Math.floor(num / 10);
  }
}

encoding(2049);
encoding(9347439);

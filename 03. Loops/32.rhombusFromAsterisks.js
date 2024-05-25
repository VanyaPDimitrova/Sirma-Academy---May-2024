function rhombusFromAsterisks(n) {
  for (let i = 1; i <= n; i++) {
    let row = Array.from({length: i}, () => '*').join(' ');
    
    console.log(row.padStart(n+i-1,' '));
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = Array.from({length: i}, () => '*').join(' ');
    
    console.log(row.padStart(n+i-1,' '));
  }
}

rhombusFromAsterisks(1);
rhombusFromAsterisks(2);
rhombusFromAsterisks(3);
rhombusFromAsterisks(4);

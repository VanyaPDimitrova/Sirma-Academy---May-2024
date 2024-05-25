function treePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = Array.from({length: 2*i-1}, () => '*').join('');
    
    console.log(row.padStart(n+i-1,' '));
  }

  let row = Array.from({length: 1}, () => '*').join('');
  console.log(row.padStart(n,' '));
}

treePattern(1);
treePattern(2);
treePattern(3);
treePattern(4);
treePattern(6);

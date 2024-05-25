function christmasTree(n) {
  for (let i = 0; i <= n; i++) {
    let asterisks = Array.from({length: i}, () => '*').join('');
    let row = (asterisks + ' | ' + asterisks).padStart(n+i+3,' ');
    
    console.log(row);
  }
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);

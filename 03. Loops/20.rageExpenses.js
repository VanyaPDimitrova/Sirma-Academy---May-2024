function calculateRageExpenses(lostGamesCount, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
  let expenses = 0; 
  
  for (let i = 1; i <= lostGamesCount; i++) {
    // trashes headset.
    if (i % 2 == 0) {
      expenses += headsetPrice;
    } 
    // trashes mouse.
    if (i % 3 == 0) {
      expenses += mousePrice;
    }
    // trashes keyboard.
    if (i % 6 == 0) {
      expenses += keyboardPrice;
    }
    // trashes display.
    if (i % 12 == 0) {
       expenses += displayPrice;
    }
  }

  const output = `Rage expenses: ${expenses} lv.`;
  console.log(output);
}

calculateRageExpenses(7, 2, 3, 4, 5);
calculateRageExpenses(23, 12.50, 21.50, 40, 200);
calculateRageExpenses(1000, 2, 3, 4, 5);
calculateRageExpenses(0, 2, 3, 4, 5);

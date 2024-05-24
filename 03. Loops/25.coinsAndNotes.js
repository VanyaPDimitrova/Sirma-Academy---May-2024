function coinsAndNotes(oneLvCoinsNumber, twoLvCoinsNumber, fiveLvBanknotesNumber, sum) {
  for (let i = 0; i <= oneLvCoinsNumber; i++) {
    for (let j = 0; j <= twoLvCoinsNumber; j++) {
      for (let k = 0; k <= fiveLvBanknotesNumber; k++) {
        let currentSum = i * 1 + j * 2 + k * 5;

        if (currentSum == sum) {
          console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
        }
      }
    }
  }
}

coinsAndNotes(3, 2, 3, 10);

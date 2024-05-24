function calculateProfit(pRenovation, cPowders, cLipsticks, cSpirals, cShadows, cConcealer) {
  const pPowder = 2.60;
  const pLipstick = 3.00;
  const pSpiral = 4.10;
  const pShadow = 8.20;
  const pConcealer = 2.00;
  
  const orderedProductsCount = cPowders + cLipsticks + cSpirals + cShadows + cConcealer;

  const order = cPowders * pPowder 
            + cLipsticks * pLipstick 
            + cSpirals * pSpiral
            + cShadows * pShadow
            + cConcealer * pConcealer;

  const orderPrice = orderedProductsCount >= 50 ? order*0.75 : order;

  const shopRent = orderPrice * 0.10;
  const moneyEarned = orderPrice - shopRent;
  const remainingMoney = moneyEarned - pRenovation;

  if (remainingMoney >= 0) {
    console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
  } else {
    console.log(`Not enough money! ${(-1)*remainingMoney.toFixed(2)} BGN needed.`);
  }
}

calculateProfit(40.8, 20, 25, 30, 50, 10);
calculateProfit(320, 8, 2, 5, 5, 1);

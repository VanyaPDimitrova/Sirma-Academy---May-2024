function furniturePurchase(firstCost) {
  const secondCost = 0.8*firstCost;
  const thirdCost = 1.15*1.8*firstCost;
  const totalCost = firstCost + secondCost + thirdCost;

  console.log(totalCost.toFixed(3));
};

furniturePurchase(380);
furniturePurchase(720.50);
furniturePurchase(455.30);

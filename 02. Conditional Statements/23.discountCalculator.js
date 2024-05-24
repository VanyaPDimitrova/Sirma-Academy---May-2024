function calculateDiscount(age, card) {
  let discount = '';

  if (age < 18){
    discount = '10% discount';
  } else if (18 <= age && age <= 64) {
    discount = card == 'Yes' ? '20% discount' : '10% discount';
  } else if (age > 64) {
    discount = '30% discount';
  }

  console.log(discount);
}

calculateDiscount(20, 'Yes');
calculateDiscount(15, 'No');
calculateDiscount(70, 'No');
calculateDiscount(64, 'No');
calculateDiscount(18, 'Yes');

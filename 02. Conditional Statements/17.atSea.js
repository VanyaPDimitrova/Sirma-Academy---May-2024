function calculateVacationCosts(days, room, assessment) {
  const singleRoomPrice = 25.00;
  const apartmentPrice = 50.00;
  const presidentialPrice = 100.00;
  let finalPrice = 0;
  let discount = 0;
  let price = 0;

  if (room == 'single room') {
    price = (days - 1) * singleRoomPrice;

  } else if (room == 'apartment') {
    price = (days - 1) * apartmentPrice;

  } else if (room == 'president apartment') {
    price = (days - 1) * presidentialPrice;
  }

  if (days < 10) {
    if (room == 'apartment') {
      discount = price * 0.30;

    } else if (room == 'president apartment') {
      discount = price * 0.10;
    }

  } else if (10 <= days && days <= 15) {
    if (room == 'apartment') {
      discount = price * 0.35;

    } else if (room == 'president apartment') {
      discount = price * 0.15;
    }

  } else if (15 < days) {
    if (room == 'apartment') {
      discount = price * 0.50;

    } else if (room == 'president apartment') {
      discount = price * 0.20;
    }
  }

  const discountedPrice = price - discount;

  if (assessment == 'positive') {
    finalPrice = discountedPrice * 1.25;
  } else if (assessment == 'negative') {
    finalPrice = discountedPrice * 0.90;
  }

  console.log(finalPrice.toFixed(2));
}

calculateVacationCosts(11, 'apartment', 'positive');
calculateVacationCosts(30, 'president apartment', 'negative');
calculateVacationCosts(12, 'single room', 'positive');
calculateVacationCosts(2, 'apartment', 'positive');

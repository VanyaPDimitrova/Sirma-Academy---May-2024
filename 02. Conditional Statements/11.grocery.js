function calculateCosts(product, city, quantity) {
  let price = 0;

  switch (product) {
    case 'tea':
      if (city == 'Sofia') {
        price = 0.50;
      } else if (city == 'Plovdiv') {
        price = 0.40;
      } else if (city == 'Varna') {
        price = 0.45;
      }
      break;
    case 'water':
      if (city == 'Sofia') {
        price = 0.80;
      } else if (city == 'Plovdiv') {
        price = 0.70;
      } else if (city == 'Varna') {
        price = 0.70;
      }
      break;
    case 'juice':
      if (city == 'Sofia') {
        price = 1.20;
      } else if (city == 'Plovdiv') {
        price = 1.15;
      } else if (city == 'Varna') {
        price = 1.10;
      }
      break;
    case 'sweets':
      if (city == 'Sofia') {
        price = 1.45;
      } else if (city == 'Plovdiv') {
        price = 1.30;
      } else if (city == 'Varna') {
        price = 1.35;
      }
      break;
    case 'chips':
      if (city == 'Sofia') {
        price = 1.60;
      } else if (city == 'Plovdiv') {
        price = 1.50;
      } else if (city == 'Varna') {
        price = 1.55;
      }
      break;
  };

  const costs = price * quantity;

  console.log(costs.toFixed(2));
  // return costs;
}

calculateCosts('tea', 'Varna', 2);
calculateCosts('chips', 'Plovdiv', 1);
calculateCosts('juice', 'Sofia', 6);
calculateCosts('sweets', 'Plovdiv', 1);

// console.log(calculateCosts('tea', 'Sofia', 1) == 0.50);
// console.log(calculateCosts('tea', 'Plovdiv', 1) == 0.40);
// console.log(calculateCosts('tea', 'Varna', 1) == 0.45);

// console.log(calculateCosts('water', 'Sofia', 1) == 0.80);
// console.log(calculateCosts('water', 'Plovdiv', 1) == 0.70);
// console.log(calculateCosts('water', 'Varna', 1) == 0.70);

// console.log(calculateCosts('juice', 'Sofia', 1) == 1.20);
// console.log(calculateCosts('juice', 'Plovdiv', 1) == 1.15);
// console.log(calculateCosts('juice', 'Varna', 1) == 1.10);

// console.log(calculateCosts('sweets', 'Sofia', 1) == 1.45);
// console.log(calculateCosts('sweets', 'Plovdiv', 1) == 1.30);
// console.log(calculateCosts('sweets', 'Varna', 1) == 1.35);

// console.log(calculateCosts('chips', 'Sofia', 1) == 1.60);
// console.log(calculateCosts('chips', 'Plovdiv', 1) == 1.50);
// console.log(calculateCosts('chips', 'Varna', 1) == 1.55);

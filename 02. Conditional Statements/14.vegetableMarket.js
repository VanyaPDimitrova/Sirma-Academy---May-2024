function calculatePrice(vegetable, day, quantity) {
  const isWeekend = day == 'Saturday' 
                 || day == 'Sunday';
  const isWorkDay = day == 'Monday'
                 || day == 'Tuesday'
                 || day == 'Wednesday'
                 || day == 'Thursday'
                 || day == 'Friday';

  let price = 0;              
  let isError = false;

  if (!(isWeekend || isWorkDay)) {
    isError = true;
  } else {
    switch (vegetable) {
      case 'tomato':
        price = isWeekend ? 2.80 : isWorkDay && 2.50;
        break;
      case 'onion':
        price = isWeekend ? 1.30 : isWorkDay && 1.20;
        break;
      case 'lettuce':
        price = isWeekend ? 0.85 : isWorkDay && 0.85;
        break;
      case 'cucumber':
        price = isWeekend ? 1.75 : isWorkDay && 1.45;
        break;
      case 'pepper':
        price = isWeekend ? 3.50 : isWorkDay && 5.50;
        break;                          
      default:
        isError = true;
        break;
    }
  }

  const costs = price * quantity;
  const toPrint = isError ? 'error' : costs.toFixed(2);

  console.log(toPrint);
}

calculatePrice('tomato', 'Sunday', 1);
calculatePrice('tomatoes', 'Tuesday', 1);
calculatePrice('tomato', 'Tuesdays', 1);
calculatePrice('tomato', 'Tuesday', 2);
calculatePrice('onion', 'Sunday', 3);
calculatePrice('pepper', 'Monday', 10);
calculatePrice('banana', 'Friday', 5);

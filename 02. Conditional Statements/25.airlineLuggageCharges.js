function airlineLuggageCharges(weight, dimensions) {
  let charge = 0;
  let comment = '';
  let isOverWeight = false;
  let isOverSize = false;

  if (weight > 50) {
    isOverWeight = true;
    comment += 'Overweight';
    charge += 100;
  }

  const dimensionDiff = dimensions - 158;

  if (dimensionDiff > 0) {
    isOverSize = true;
    comment += isOverWeight ? ' + Oversize' : 'Oversize';

    if (1 <= dimensionDiff && dimensionDiff <= 20) {
      charge += 50;
    } else if (21 <= dimensionDiff && dimensionDiff <= 50) {
      charge += 100;
    } else if (50 < dimensionDiff) {
      charge += 200;
    }
  }

  if (isOverSize && isOverWeight) {
    charge += 50;
    comment += ' + Handling';
  }
  
  const result = `$${charge} (${comment})`;

  console.log(result);
}

airlineLuggageCharges(52, 160);
airlineLuggageCharges(48, 180);
airlineLuggageCharges(55, 190);
airlineLuggageCharges(21, 158);
airlineLuggageCharges(51, 210);

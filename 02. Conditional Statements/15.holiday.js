function calculateVacation(budget, season) {
  let destination = '';
  let typeHoliday = '';
  let amountSpend = 0;

  if (budget <= 100) {
    destination = 'Bulgaria';
    amountSpend = season =='summer' ? budget*30/100 : budget*70/100;
    typeHoliday = season =='summer' ? 'Camp' : 'Hotel';

  } else if (budget <= 1000) {
    destination = 'Europe';
    amountSpend = season =='summer' ? budget*40/100 : budget*80/100;
    typeHoliday = season =='summer' ? 'Camp' : 'Hotel';

  } else if (budget > 1000) {
    destination = 'Asia';
    amountSpend = budget*90/100;
    typeHoliday = 'Hotel';
  }

  const firstLine = `Somewhere in ${destination}`;
  const secondLine = `${typeHoliday} - ${amountSpend.toFixed(2)}`;

  console.log(`${firstLine}\n${secondLine}`);
}

console.log('----------');
calculateVacation(50, 'summer');
console.log('----------');
calculateVacation(75, 'winter');
console.log('----------');
calculateVacation(312, 'summer');
console.log('----------');
calculateVacation(678.53, 'winter');
console.log('----------');
calculateVacation(1500, 'summer');
console.log('-------------------------------------');
calculateVacation(1000, 'summer');
console.log('----------');
calculateVacation(100, 'winter');
console.log('----------');
calculateVacation(5000, 'winter');
console.log('----------');
calculateVacation(10, 'summer');

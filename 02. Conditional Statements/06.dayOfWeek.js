function printWeekDay(dayNumber) {
  let day = '';
  switch (dayNumber) {
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 7:
      day = 'Sunday';
      break;
    default:
      day = 'Error'
      break;
  }

  console.log(day);
}

printWeekDay(1);
printWeekDay(2);
printWeekDay(3);
printWeekDay(4);
printWeekDay(5);
printWeekDay(6);
printWeekDay(7);
printWeekDay(0);

function dayOfWeek(n) {
  let weekDAy = '';
  
  switch (n) {
    case 1:
      weekDAy = 'Monday';
      break;
    case 2:
      weekDAy = 'Tuesday';
      break;
    case 3:
      weekDAy = 'Wednesday';
      break;
    case 4:
      weekDAy = 'Thursday';
      break;
    case 5:
      weekDAy = 'Friday';
      break;
    case 6:
      weekDAy = 'Saturday';
      break;
    case 7:
      weekDAy = 'Sunday';
      break;      
    default:
      weekDAy = 'Invalid day!';
      break;
  }

  console.log(weekDAy);
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);

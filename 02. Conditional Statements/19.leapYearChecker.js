function leapYearChecker(year) {
  let isLeapYear = true;

  if (year % 4 != 0) {
    isLeapYear = false;
  } else {
    if (year % 100 != 0) {
      isLeapYear = true;
    } else {
      if (year % 400 == 0) {
        isLeapYear = true;
      } else {
        isLeapYear = false;
      }
    }
  }

  const conclusion = isLeapYear ? 'It‘s a leap year!' : 'It‘s not a leap year.';

  console.log(conclusion);
}

leapYearChecker(2020);
leapYearChecker(1900);
leapYearChecker(2000);
leapYearChecker(2023);
leapYearChecker(1600);
leapYearChecker(2024);

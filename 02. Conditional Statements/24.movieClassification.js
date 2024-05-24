function movieCategory(age) {
  let category = '';

  if (age < 13){
    category = 'U-rated movies';
  } else if (13 <= age && age <= 17) {
    category = 'U and PG-13 rated movies';
  } else if (age > 18) {
    category = 'All movies';
  }

  console.log(category);
}

movieCategory(10);
movieCategory(16);
movieCategory(21);

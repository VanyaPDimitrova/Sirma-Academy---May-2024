function movieTicketPrice(age) {
  let price = 0;

  if (0 <= age && age <= 12) {
    price = 5;
  } else if (13 <= age && age <= 19) {
    price = 8;
  } else if (20 <= age) {
    price = 10;
  }

  console.log('$' + price);
}

movieTicketPrice(10);
movieTicketPrice(16);
movieTicketPrice(25);
movieTicketPrice(13);
movieTicketPrice(12);
movieTicketPrice(19);
movieTicketPrice(20);


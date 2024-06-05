let input1 = [
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"
  ],
  "destination"
];

let input2 = [
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"
  ],
  "status"
]

class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

class Tickets {
  tickets = [];
  constructor([strings, criterion]) {
    this.#populateTickets(strings)
    this.#sortTickets(criterion);
  
    return this.tickets;
  }

  #populateTickets(strings) {
    for (const row of strings) {
      let [destination, price, status] = row.split('|');
      let ticket = new Ticket(destination, price, status);
      
      this.tickets.push(ticket);
    }
  }

  #sortTickets(criterion) {
    this.tickets.sort((a, b) => a[criterion].localeCompare(b[criterion]));
  }
}


console.log(new Tickets(input1));
console.log(new Tickets(input2));

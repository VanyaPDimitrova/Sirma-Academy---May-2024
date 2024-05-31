function phonebook(namesAndPhones) {
  const phonebookObj = {};

  for (const element of namesAndPhones) {
    const row = element.split(' ');
    const name = row.shift();
    const phoneNumber = row.join(' ');

    phonebookObj[name] = phoneNumber;
  }

  const toPrint = [];
  for (const [key, value] of Object.entries(phonebookObj)) {
    toPrint.push(`${key} -> ${value}`);
  }

  return toPrint.join('\n');
}

console.log(phonebook(["Peter 0888 657212", "Bob 0899657 212", "Peter 123123"]));
// console.log(phonebook(["Maria 123", "Samantha 456", "Nicole 789"]));
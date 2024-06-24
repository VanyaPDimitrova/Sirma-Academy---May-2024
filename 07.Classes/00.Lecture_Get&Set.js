class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
     const [firstName, lastName] = value.split(' ');
     this.firstName = firstName;
     this.lastName = lastName;
  }
}

let person = new Person('Pesho', 'Petrov');
console.log(person);
console.log(person.fullName);

person.firstName = 'Ivan';
console.log(person.fullName);

person.fullName = 'Gary Moor';
console.log(person);
console.log(person.fullName);

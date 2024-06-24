class Cat {
  // Add instance property
  legCount = 4;

  // Add static property - може да се извиква само през класа, но не и през инстанция
  static eyeCount = 2;

  // Add private property - може да бъде достъпено само вътре в класа
  #internalProp = 'Secret';

  // Add static private property
  static #staticInternalProp = 'Secret2';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method 
  makeSound() {
    console.log(this.name + ': Meow ...');
    console.log('#internalProp = ' + this.#internalProp);
    this.#someMethod();
  }
  
  // Instance Private method
  #someMethod() {
    console.log('Private method');
  }

  // Static method
  static catSound() {
    console.log('Meow');
    console.log(Cat.eyeCount);
    console.log(Cat.#staticInternalProp);
  }

  // Private static method
  static #privateStatic() {
    console.log('Private static');
  }
}

console.log(Cat);

let firstCat = new Cat('Pamuk', 9);
console.log(firstCat);
firstCat.makeSound();

//Read static property
console.log(Cat.eyeCount);

//Call static method
Cat.catSound();

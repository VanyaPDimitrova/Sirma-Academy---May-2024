class Laptop {
  info = {
    producer: '',
    age: 0,
    brand: '',
  }
  isOn = false;

  constructor(info, quality) {
    if (typeof info == 'object') {
      this.info = info;
    }

    this.quality = quality ? quality : 0;
  }

  get price() {
    let age = this.info.age ? this.info.age : 0;
    
    return (800 - age * 2 + this.quality * 0.5);
  }

  turnOn() {
      this.isOn = true;
      this.quality--;
  }

  turnOff() {
    this.isOn = false;
    this.quality--;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }
}

// let info1 = {producer: "Asus",age: 2, brand: "Zenbook"};
// let laptop1 = new Laptop(info1, 10);
// laptop1.turnOn();
// console.log(laptop1.showInfo());
// laptop1.turnOff();
// console.log(laptop1.quality);
// laptop1.turnOn();
// console.log(laptop1.isOn);
// console.log(laptop1.price);


// let info2 = {producer: "Lenovo", age: 1, brand: "Legion"};
// let laptop2 = new Laptop(info2, 10);
// laptop2.turnOn();
// console.log(laptop2.showInfo());
// laptop2.turnOff();
// laptop2.turnOn();
// laptop2.turnOff();
// console.log(laptop2.isOn);


let info3 = {
  producer: "Asus",
  // age: 2, 
  brand: "Zenbook"
};
let lappy = new Laptop(info3);
console.log(lappy);
lappy.turnOn();
console.log(lappy.showInfo());
lappy.turnOff();
console.log(lappy.quality);
lappy.turnOn();
console.log(lappy.isOn);
console.log(lappy.price);


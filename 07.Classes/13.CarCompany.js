let input = ['Audi | Q7 | 1000',
             'Audi | Q6 | 100',
             'BMW | X5 | 1000',
             'BMW | X6 | 100',
             'Citroen | C4 | 123',
             'Volga | GAZ-24 | 1000000',
             'Lada | Niva | 1000000',
             'Lada | Jigula | 1000000',
             'Citroen | C4 | 22',
             'Citroen | C5 | 10'
            ];

class CarCompany {
  producedCars = {};
  constructor(input) {
    this.input = input;
    this.#storeProducedCars();
  }

  #storeProducedCars() {
    for (const row of input) {
      let [brand, model, quantity] = row.split(' | ');
      
      if (this.#isBrandExist(brand)) {
        if (this.#isModelInBrandExist(brand, model)) {
          this.producedCars[brand][model] += Number(quantity);
        } else {
          this.producedCars[brand][model] = Number(quantity);
        }
      } else {
        this.producedCars[brand] = {
          [model]: Number(quantity),
        };
      }
    }
  }

  #isBrandExist(brand) {
    return this.producedCars[brand];
  }

  #isModelInBrandExist(brand, model) {
    return this.producedCars[brand][model];
  }

  printCars() {
    for (const brand in this.producedCars) {
      console.log(`${brand}`);

      for (const model in this.producedCars[brand]) {
        console.log(`###${model} -> ${this.producedCars[brand][model]}`);
      }
    }
  }
}

let company = new CarCompany(input);
company.printCars();


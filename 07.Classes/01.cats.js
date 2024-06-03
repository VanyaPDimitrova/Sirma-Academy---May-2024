function createClassCat(catsData) {
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }

    meow() {
      console.log(`${this.catName}, age ${this.age} says meow`);
    }
  }

  const cats = [];

  for (const row of catsData) {
    const [catName, age] = row.split(' ');

    let currentCat = new Cat(catName, age);
    cats.push(currentCat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}

createClassCat(['Mellon 2', 'Tom 3']);
createClassCat(['Branch 1', 'Poppy 3', 'Goldy 2']);

class List {
  numberList = [];

  get size() {
    return this.numberList.length;
  }

  add(element) {
    this.numberList.push(element);
    this.numberList.sort((a, b) => Number(a) - Number(b));
  }

  remove(index) {
    if (this.#isValidIndex) {
      this.numberList.splice(index, 1);
    }
  }

  get(index) {
    if (this.#isValidIndex) {
      return this.numberList.at(index);
    }
  }

  #isValidIndex(index) {
    return 0 <= index && index < this.size;
  } 
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(3);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list);
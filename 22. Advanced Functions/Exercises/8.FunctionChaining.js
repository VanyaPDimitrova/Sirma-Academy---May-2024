const stringManipulator = {
    name: '',
    setValue(value) {
        this.name = value;
        return this;
    },
    toUpperCase() {
        this.name = this.name.toUpperCase();
        return this;
    },
    toLowerCase() {
        this.name = this.name.toLowerCase();
        return this;
    },
    print() {
        console.log(this.name);
        return this;
    }
}

stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();

// HELLO
//  hello

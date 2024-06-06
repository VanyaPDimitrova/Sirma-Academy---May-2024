class StringContainer {
  constructor(string, length) {
    this.length = length;
    this.innerString = string;
    this.innerLength = length;
  }

  increase(length) {
    this.length += length;
  }

  decrease(length) {
    this.length -= length;

    if (this.length < 0) {
      this.length = 0;
    }
  }

  toString() {
    let length = this.innerString.length;

    if (length <= this.length) {
      return this.innerString;
    } else if (length == 0) {
      return '...';
    } else {
      return this.innerString.substring(0, this.length) + '...';
    }
  }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test

const obj1 = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const obj2 = {
    name: 'Bob'
};

obj1.greet();
const objGreet = obj1.greet;

const greetFromObj1 = objGreet.bind(obj1);
greetFromObj1();

const greetFromObj2 = objGreet.bind(obj2);
greetFromObj2();

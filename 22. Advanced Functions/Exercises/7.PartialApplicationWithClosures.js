function sumOfFour(a, b, c, d) {
    return a + b + c + d;
}

const partialSum = (a) => sumOfFour.bind(null, a);

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11

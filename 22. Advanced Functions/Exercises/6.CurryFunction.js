function productOfThree(a, b, c) {
    return a * b * c;
}

const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4)); // Output: 24

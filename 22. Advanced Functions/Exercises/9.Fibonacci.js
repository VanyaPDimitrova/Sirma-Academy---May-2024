function getFibonacci() {
    let f0 = 0;
    let f1 = 1;

    function currentFibonacciNumber() {
        let current = f1;
        f1 += f0;
        f0 = current;

        return current;
    }

    return currentFibonacciNumber;
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
console.log(fibonacci()); // 34
console.log(fibonacci()); // 55
console.log(fibonacci()); // 89
console.log(fibonacci()); // 144

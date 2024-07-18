function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

function compose(firstFunc, secondFunc) {
    return (number) => secondFunc(firstFunc(number));
}

const doubleThenSquare = compose(double, square);


console.log(doubleThenSquare(3)); // Output: 36

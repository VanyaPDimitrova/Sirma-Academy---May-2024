function createPrivateCounter() {
    let count = 0;

    const increment = () => {count++};
    const getCount = () => count;

    return {
        increment,
        getCount
    }
}

const counter = createPrivateCounter();

counter.increment();
console.log(counter.getCount()); // Output: 1

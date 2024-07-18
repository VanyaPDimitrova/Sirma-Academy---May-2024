// IIFE

(function () {
    console.log('IIFE');
})();
// ------------------------------------------------ //


// Closer
function counter(count = 0) {
    const initialCount = count;
    function increaseCount() {
        ++count;
    }

    function decreaseCount() {
        count--;
    }

    function printCount() {
        console.log('initialCount: ', initialCount);
        console.log(count);
    }
    
    return {
        increaseCount,
        decreaseCount,
        printCount
    };
}

const bookCounter = counter(10);
const increaseMyCounter = bookCounter.increaseCount;
const decreaseMyCounter = bookCounter.decreaseCount;
const printMyCounter = bookCounter.printCount;

increaseMyCounter();
increaseMyCounter();
increaseMyCounter();
printMyCounter();


const carCounter = counter(0);

carCounter.increaseCount();
carCounter.printCount();

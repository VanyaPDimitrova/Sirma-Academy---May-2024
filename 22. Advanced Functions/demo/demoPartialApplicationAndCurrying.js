// Partial Application
const successMessage = 'Successful user registration';
const deletedMessage = 'User has been deleted';
const postCreated = 'User created a post';

function logger(service, message) {
    console.log(`${service} service: ${message}`);
}

logger('admin', successMessage);

// Partial Application with function wrapper
const adminLog = (message) => logger('admin', message);
adminLog(deletedMessage);

// Partial Application with bind
const userLog = logger.bind(null, 'user');
userLog(postCreated);
// ------------------------------------------------ //


// Currying
// normal function
const sum = (a, b, c) => a + b + c;
// curry function of sum
const currySum = a => b => c => a + b + c;

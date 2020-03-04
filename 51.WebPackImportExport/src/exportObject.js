console.log('utils.js is running.');

const square = (number) => {
    return number * number;
};

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => a - b;

export { square, add, subtract as default };
// export { square, add };
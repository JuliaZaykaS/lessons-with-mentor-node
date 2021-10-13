const actionHandler = require("./actionHandler");

const [operation, ...numbers] = process.argv.slice(2);
const convertedToNumbersArr = numbers.map((item) => {
    return Number(item);
});

actionHandler(operation, convertedToNumbersArr);
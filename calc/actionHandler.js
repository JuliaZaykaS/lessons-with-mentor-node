// let operations = require("./operations");
const { sum, sub, mult, div } = require("./operations");

// console.log(operations.sum());
// console.log(operations.sub());
// console.log(operations.mult());
// console.log(operations.div());

const actionHandler = (operation, convertedToNumbersArr) => {
    switch (operation) {
        case "sum":
            sum(operation, convertedToNumbersArr);
            break;

        case "sub":
            sub(operation, convertedToNumbersArr);
            break;

        case "mult":
            mult(operation, convertedToNumbersArr);
            break;

        case "div":
            div(operation, convertedToNumbersArr);
            break;

        default:
            console.error("Unable to handle operation");
    }
};

module.exports = actionHandler;
const sum = (operationType, convertedToNumbersArr) => {
    if (operationType === "sum") {
        let result = convertedToNumbersArr.reduce((acc, num) => {
            return acc + num;
        }, 0);
        console.log(result);
        return true;
    }
    return null;
};

module.exports = sum;
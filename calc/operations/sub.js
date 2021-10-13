const sub = (operationType, convertedToNumbersArr) => {
    if (operationType === "sub") {
        let result = convertedToNumbersArr.reduce((acc, num) => {
            return acc - num;
        });
        console.log(result);
        return true;
    }
    return null;
};

module.exports = sub;
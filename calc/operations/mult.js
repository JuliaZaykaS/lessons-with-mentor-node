const mult = (operationType, convertedToNumbersArr) => {
    if (operationType === "mult") {
        let result = convertedToNumbersArr.reduce((acc, num) => {
            return acc * num;
        });
        console.log(result);
        return true;
    }
    return null;
};

module.exports = mult;
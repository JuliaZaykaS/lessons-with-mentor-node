const div = (operationType, convertedToNumbersArr) => {
    if (operationType === "div") {
        let result = convertedToNumbersArr.reduce((acc, num) => {
            return acc / num;
        });
        console.log(result);
        return true;
    }
    return null;
};

module.exports = div;
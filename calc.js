const [operation, ...numbers] = process.argv.slice(2);
console.log(operation);

const convertedToNumbers = numbers.map((elem) => {
  return Number(elem);
});
switch (operation) {
  case "sum":
    let sum = convertedToNumbers.reduce((acc, num) => {
      return acc + num;
    }, 0);
    console.log(sum);
    break;
  case "sub":
    let sub = convertedToNumbers.reduce((acc, num) => {
      return acc - num;
    });
    console.log(sub);
    break;
  case "mult":
    let mult = convertedToNumbers.reduce((acc, num) => {
      return acc * num;
    });
    console.log(mult);
    break;
  case "div":
    let div = convertedToNumbers.reduce((acc, num) => {
      return acc / num;
    });
    console.log(div);
        break;
    default:
        console.error('Unable to handle operation')
}

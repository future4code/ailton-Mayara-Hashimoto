// 2

const num = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
    let sum;
  if (num === "add") {
    sum = num1 + num2
  } else if (num === "sub") {
    sum = num1 - num2
  } else if (num === "x") {
    sum = num1 * num2
  } else if (num === "div") {
    sum = num1 / num2
  } else {
    sum = "not found"
  };
  console.log(`Resposta: ${sum}`)
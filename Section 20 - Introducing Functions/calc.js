function math(num1, num2, operation) {
  if (operation === "add" || operation === "+") {
    sum = num1 + num2;
    console.log(`Sum: ${sum}`);

    return sum;
  } else if (operation === "subtract" || operation === "-") {
    subtract = num1 - num2;
    console.log(`Subtraction: ${subtract}`);

    return subtract;
  } else if (operation === "multiply" || operation === "*") {
    multiply = num1 * num2;
    console.log(`Multiplication: ${multiply}`);

    return multiply;
  } else if (operation === "divide" || operation === "/") {
    divide = num1 / num2;
    console.log(`Division: ${divide}`);

    return divide;
  }
}

const a = parseInt(prompt("Enter Num1: "));
const b = parseInt(prompt("Enter Num2: "));
const Operator = prompt("Enter Operator: ");

math(a, b, Operator);

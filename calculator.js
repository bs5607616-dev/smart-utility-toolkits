// calculator.js
// A simple CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

// process.argv looks like:
// [0] node path
// [1] file path
// [2] operation
// [3] num1
// [4] num2

const args = process.argv.slice(2); // remove first 2 default entries

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    default:
      throw new Error("Invalid operation. Use add, subtract, multiply, or divide");
  }
}

// Handle invalid input gracefully
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input!");
  console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
} else {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

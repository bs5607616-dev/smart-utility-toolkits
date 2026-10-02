// app.js
// Demonstrates importing and reusing custom modules with require()

const isEven = require("./modules/isEven");
const { logInfo, logError } = require("./modules/logger");

logInfo("Starting module reusability demo...");

const numbers = [3, 4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    logInfo(`${num} is Even`);
  } else {
    logError(`${num} is Odd`);
  }
});

logInfo("Demo finished.");

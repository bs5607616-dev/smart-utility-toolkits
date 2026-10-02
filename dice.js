// dice.js
// Random Dice Generator using the crypto module
// Run: node dice.js

const crypto = require("crypto");

// Generates a secure random integer between min and max (inclusive)
function rollDice(min = 1, max = 6) {
  const range = max - min + 1;
  const randomByte = crypto.randomInt(0, range); // crypto.randomInt is secure
  return randomByte + min;
}

// Simulate multiple dice rolls using a loop
const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice(1, 6);
  console.log(`🎲 Dice Rolled: ${result}`);
}

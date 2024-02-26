const readline = require('readline').promises;

async function readInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const input = await rl.question(prompt);
    return input.trim(); // Remove leading/trailing whitespace
  } finally {
    rl.close();
  }

  
}




module.exports = readInput;

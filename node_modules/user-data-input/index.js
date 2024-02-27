const readline = require('readline');

function askQuestion(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim());
      rl.close();
    });
  });
}

async function readInput(prompt) {
  const input = await askQuestion(prompt);
  return input;
}




module.exports = readInput;

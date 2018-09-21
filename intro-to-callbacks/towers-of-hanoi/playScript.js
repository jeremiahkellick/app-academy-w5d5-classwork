const Game = require('./game.js');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const completionCallback = function() {
  reader.question('Would you like to play again (y/n)? ', function(response) {
    if (response.toLowerCase() === 'y') {
      new Game(reader, completionCallback).run();
    } else {
      reader.close();
    }
  });
};

new Game(reader, completionCallback).run();

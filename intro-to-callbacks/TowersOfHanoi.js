// class Game {
//   run() {
//     // set up board
//     // until full tower is moved
//       // get valid move from player
//       // make the move
//     // say congrats
//   }
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[1, 2, 3], [], []];
  }

  run() {
    console.log(this.towers);

    reader.question('Make a move\n', (response) => {
      let [from, to] = response.split(',').map(s => parseInt(s)); // [0, 1]

      if (this.isValid(from, to)) {
        this.towers[to].unshift(this.towers[from].shift());
      } else {
        console.log('Invalid move');
      }

      if (this.isOver()) {
        console.log(this.towers);
        console.log('Congratulations');
        reader.close();
      } else {
        this.run();
      }
    });
  }

  isValid(from, to) {
    return from >= 0 && from <= 2 && to >= 0 && to <= 2 &&
      this.towers[from].length > 0 &&
      (this.towers[to].length === 0 || this.towers[to][0] > this.towers[from][0]);
  }

  isOver() {
    return this.towers.slice(1).some((tower) => {
      return tower.length === 3;
    });
  }
}

new Game().run();

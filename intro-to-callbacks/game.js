class Game {
  constructor(reader, completionCallback) {
    this.towers = [[1, 2, 3], [], []];
    this.reader = reader;
    this.completionCallback = completionCallback;
  }

  run() {
    console.log(this.towers);

    this.reader.question('Make a move\n', (response) => {
      let [from, to] = response.split(',').map(s => parseInt(s)); // [0, 1]

      if (this.isValid(from, to)) {
        this.towers[to].unshift(this.towers[from].shift());
      } else {
        console.log('Invalid move');
      }

      if (this.isOver()) {
        console.log(this.towers);
        console.log('Congratulations');
        this.completionCallback();
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

module.exports = Game;

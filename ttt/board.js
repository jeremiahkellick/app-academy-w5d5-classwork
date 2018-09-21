class Board {
  constructor(grid = Array(3).fill(null).map( _ => Array(3).fill(null))) {
    this.grid = grid;
  }

  winner() {
    const winGroups = [];

    for (let i = 0; i < 3; i++) {
      let row = [];
      let column = [];

      for (let j = 0; j < 3; j++) {
        row.push([i, j]); // [0, 0], [0, 1], [0, 2]
        column.push([j, i]); // [0, 0], [1, 0], [2, 0]
      }

      winGroups.push(row);
      winGroups.push(column);
    }

    winGroups.push([[0,0],[1,1],[2,2]]);
    winGroups.push([[0,2],[1,1],[2,0]]);

    let winner = null;
    ['x','o'].forEach((mark) => {
      const won = winGroups.some((winGroup) => {
        return winGroup.every(pos => this.getPos(pos) === mark);
      });
      if (won) {
        winner = mark;
      }
    });
    return winner;
  }

  won() {
    return winner !== null;
  }

  empty(pos) {

  }

  place_mark(pos, mark) {


  }

  getPos(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  setPos(pos, value) {
    this.grid[pos[0]][pos[1]] = value;
  }

}

let board1 = new Board([
  ['x', 'x', 'x'],
  ['o', null, null],
  ['o', null, 'o']
]);

console.log(board1.winner());

let board2 = new Board([
  ['o', 'o', 'x'],
  ['x', 'o', null],
  ['o', null, 'o']
]);

console.log(board2.winner());

let emptyBoard = new Board();

console.log(emptyBoard.winner());

let tie = new Board([
  ['o', 'o', 'x'],
  ['x', 'x', 'o'],
  ['o', 'x', 'o']
]);

console.log(tie.winner());


module.exports = Board;

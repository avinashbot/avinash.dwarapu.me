const Long = require('long')
const _ = require('lodash')

/* Board Bitmap:
 * 6 13 20 27 34 41 48 <- dummy areas, to make the board a square
 * 5 12 19 26 33 40 47
 * 4 11 18 25 32 39 46
 * 3 10 17 24 31 38 45
 * 2  9 16 23 30 37 44
 * 1  8 15 22 29 36 43
 * 0  7 14 21 28 35 42
 */

const BOARD_COLUMNS = 7
const BOARD_ROWS = 6
const SQUARE_SIZE = 7

function succPlayer (player) {
  return (player + 1) % 2
}

function makeDrop (col, allPieces, selfBoard) {
  for (let i = 0; i < BOARD_ROWS; i++) {
    const piecePosition = Long.ONE.shiftLeft(col * BOARD_COLUMNS + i)
    if (allPieces.and(piecePosition).isZero()) {
      return selfBoard.or(piecePosition)
    }
  }
  throw new Error('column is full')
}

const State = exports.State = function State () {
  this.boards = [Long.ZERO, Long.ZERO]
  this.columnHeights = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  this.turn = 0
}

State.prototype.getPlayer = function () {
  return this.turn
}

State.prototype.getActions = function () {
  return _.keys(_.pickBy(this.columnHeights, h => h < BOARD_ROWS))
}

State.prototype.applyAction = function (action) {
  const allPieces = this.boards[0].or(this.boards[1])
  this.boards[this.turn] = makeDrop(action, allPieces, this.boards[this.turn])
  this.columnHeights[action]++
  this.turn = succPlayer(this.turn)
}

State.prototype.isFinal = function () {
  if (this.getActions().length === 0) return true
  const board = this.boards[succPlayer(this.turn)]

  // Vertical
  if (
      !board.and(board.shiftLeft(1)).and(board.shiftLeft(2)).and(board.shiftLeft(3)).isZero() ||
      !board.and(board.shiftLeft(BOARD_COLUMNS)).and(board.shiftLeft(BOARD_COLUMNS * 2)).and(board.shiftLeft(BOARD_COLUMNS * 3)).isZero() ||
      !board.and(board.shiftLeft(SQUARE_SIZE + 1)).and(board.shiftLeft((SQUARE_SIZE + 1) * 2)).and(board.shiftLeft((SQUARE_SIZE + 1) * 3)).isZero() ||
      !board.and(board.shiftLeft(SQUARE_SIZE - 1)).and(board.shiftLeft((SQUARE_SIZE - 1) * 2)).and(board.shiftLeft((SQUARE_SIZE - 1) * 3)).isZero()
    ) {
    return true
  }

  return false
}

State.prototype.getPayouts = function () {
  // TODO: add support for ties
  if (this.turn === 1) return { 0: -1, 1: 1 }
  return { 0: 1, 1: -1 }
}

// let a = new State()
// a.applyAction(3)
// console.log(a.isFinal())
// a.applyAction(0)
// a.applyAction(0)
// console.log(a.isFinal())
// a.applyAction(0)
// a.applyAction(0)
// console.log(a.isFinal())
// a.applyAction(2)
// a.applyAction(2)
// console.log(a.isFinal())
// a.applyAction(1)
// a.applyAction(1)
// console.log(a.isFinal())
// a.applyAction(3)
// a.applyAction(1)
// console.log(a.isFinal())

const UNOCCUPIED = 0
const HUMAN_PLAYER = 1
const ROBOT_PLAYER = 2

function nextPlayer (player) {
  return (player === HUMAN_PLAYER ? ROBOT_PLAYER : HUMAN_PLAYER)
}

export function State () {
  this.board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
  this.turnToPlay = HUMAN_PLAYER
}

State.prototype.getPlayer = function getPlayer () {
  return this.turnToPlay
}

State.prototype.getActions = function getActions () {

}

State.prototype.applyAction = function applyAction (column) {
  for (let row = 5; row > 0; row--) {
    if (this.board[row][column] === UNOCCUPIED) {
      this.board[row][column] = this.turnToPlay
      break
    }
  }
  this.turnToPlay = nextPlayer(this.turnToPlay)
}

State.prototype.isFinal = function isFinal () {

}

State.prototype.getPayouts = function getPayouts () {

}

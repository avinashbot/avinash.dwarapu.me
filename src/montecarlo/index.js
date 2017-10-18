// import _ from 'lodash'
const _ = require('lodash')

/**
 * state.getPlayer
 * state.getActions
 * state.applyAction
 * state.isFinal
 * state.getPayouts
 */

const Node = exports.Node = function Node () {
  this.playCount = 0
  this.meanPayouts = {}
  this.children = {}
}

Node.prototype.ucb1 = function (fromActions, forPlayer, expFactor = Math.SQRT2) {
  return _.maxBy(fromActions, action => {
    const child = this.children[action]
    return (
      child.meanPayouts[forPlayer] +
      expFactor * Math.sqrt(Math.log(this.playCount) / child.playCount)
    )
  })
}

Node.prototype.updatePayouts = function (newPayouts) {
  this.playCount++
  _.mergeWith(this.meanPayouts, newPayouts, (avg, val) => {
    return ((avg || 0) * this.playCount + val) / this.playCount
  })
}

exports.monteCarlo = function monteCarlo (startState, startNode) {
  const visitedNodes = [startNode]
  let currentState = startState
  let currentNode = startNode

  while (!currentState.isFinal()) {
    let nextAction

    const validActions = currentState.getActions()
    const unexpandedActions = _.difference(validActions, Object.keys(currentNode.children))
    if (unexpandedActions.length > 0) {
      nextAction = _.sample(unexpandedActions)
      currentNode.children[nextAction] = new Node()
    // } else if (validActions.length === 1) {
    //   nextAction = validActions[0]
    } else {
      nextAction = currentNode.ucb1(validActions, currentState.getPlayer())
    }

    currentNode = currentNode.children[nextAction]
    visitedNodes.push(currentNode)
    currentState.applyAction(nextAction)
  }

  const payouts = currentNode.meanPayouts = currentState.getPayouts()
  for (let i = 0; i < visitedNodes.length; i++) {
    visitedNodes[i].updatePayouts(payouts)
  }
}

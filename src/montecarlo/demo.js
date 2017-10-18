// import connectfour from './cbitboard'
// import montecarlo from './index'
const connectfour = require('./cbitboard')
const montecarlo = require('./index')

const node = new montecarlo.Node()
for (let i = 0; i < 10000; i++) {
  const state = new connectfour.State()
  state.applyAction('5')
  state.applyAction('6')
  state.applyAction('2')
  state.applyAction('5')
  state.applyAction('2')
  state.applyAction('4')
  state.applyAction('6')
  state.applyAction('1')
  state.applyAction('2')
  state.applyAction('0')
  montecarlo.monteCarlo(state, node)
}
console.log(node)

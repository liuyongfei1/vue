import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  history: []

}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
// const mutations = {
//   increment (state) {
//     state.count++
//     state.history.push('increment')
//   },
//   decrement (state) {
//     state.count--
//     state.history.push('decrement')
//   }
// }

// actions are functions that cause side effects and can involve
// asynchronous operations.
// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }
//
// // getters are functions
// const getters = {
//   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
//   recentHistory: state => {
//     const limit = 5
//     const end = state.history.length
//     const begin = end - limit < 0 ? 0 : end - limit
//     return state.history
//     .slice(begin, end)
//     .toString()
//     .replace(/,/g, ', ')
//   }
// }

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    cart,
    products
  }
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store

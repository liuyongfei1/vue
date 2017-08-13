// actions are functions that cause side effects and can involve
// asynchronous operations.
import * as types from './mutation-types'

export const increment = ({commit}) => commit('increment')
export const decrement = ({commit}) => commit('decrement')
export const incrementIfOdd = ({commit, state}) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}
export const incrementAsync = ({commit}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('increment')
      resolve()
    }, 500)
  })
}

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

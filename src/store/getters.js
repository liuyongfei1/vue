// getters are functions
export const evenOrOdd = state => state.count % 2 === 0 ? 'even' : 'odd'
export const recentHistory = state => {
  const limit = 5
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
  .slice(begin, end)
  .toString()
  .replace(/,/g, ', ')
}

export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}

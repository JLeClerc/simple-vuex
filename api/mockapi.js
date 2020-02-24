/**
 * mock client-server
 */

const _items = [
  {"id":1, "value": 1},
  {"id":2, "value": 2},
  {"id":3, "value": 3}
]

export default {
  getItems (cb) {
    setTimeout(() => cb(_items), 250)
  },

  mutateItemsUnreliably(newItems, cb, errcb) {
    setTimeout(() => {
      (Math.random() > 0.5)
      ? cb() : errcb()
    }, 250)
  }
}
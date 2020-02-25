/**
 * mocking the server
 */

const _leaderboard = [
  {"name": "ipsum", "score": 10000},
  {"name": "dolor", "score": 8000},
  {"name": "lorum", "score": 5000}
]

export default {
  getLeaderboard (cb) {
    setTimeout(() => cb(_leaderboard), 250)
  },

  mutateLeaderboardItemsUnreliably(newItems, cb, errcb) {
    setTimeout(() => {
      (Math.random() > 0.5)
      ? cb() : errcb()
    }, 250)
  }
}
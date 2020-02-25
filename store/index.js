import Vue from 'vue';
import Vuex from 'vuex';

import Leaderboard from './modules/Leaderboard'
import LeaderboardEntry from './modules/LeaderboardEntry'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Leaderboard,
    LeaderboardEntry,
  },
  strict: debug,
})
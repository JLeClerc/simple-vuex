import Vue from 'vue';
import Vuex from 'vuex';

import module1 from './modules/module1'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    module1,
    module2,
  },
  strict: debug,
})
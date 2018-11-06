import Vue from 'vue';
import Vuex from 'vuex';

import activities from './modules/activities';
import itemDetail from './modules/itemDetail';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    activities,
    itemDetail,
  }
})

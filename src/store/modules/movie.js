import request from 'superagent';
import jsonp from 'superagent-jsonp';

const state = {
  hotMovies: [],
  freeMovies: [],
  newMovies: [],
};

const mutations = {
  getHotMovies(state, payload) {
    state.data = payload.res;
  },
  getFreeMovies(state, payload) {
    state.freeMovies = payload.res;
  },
  getNewMovies(state, payload) {
    state.newMovies = payload.res;
  }
};

const actions = {
  getHotMovies({commit, state}, payload) {
    request
      .get('https://api.douban.com/v2/movie/in_theaters?count=8')
      .use(jsonp{timeout: 10000})
      .end((err, res) => {
        if (!err) {
          commit('getHotMovies', {
            res: res.body.subjects
          });
        }
      })
  },

};

export default {
  state,
  mutations,
  actions,
};

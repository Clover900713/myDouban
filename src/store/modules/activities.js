import request from 'superagent';
import jsonp from 'superagent-jsonp';

const state = {
  events: [],
  skip: 0,
};

const mutations = {
  loadMore(state, payLoad) {
    state.skip += 3;
    state.events = state.events.concat(payLoad.res);
  },
};

const actions = {
  loadMore({ commit, state }) {
    request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
      state.skip + '$count=3')
      .use(jsonp({timeout: 10000}))
      .end((err, res) => {
        if (!err) {
          console.log(res);

          commit({
            type: 'loadMore',
            payLoad: res,
          });
        }
      });
  },
};

export default {
  state,
  mutations,
  actions,
};

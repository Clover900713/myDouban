import request from 'superagent';
import jsonp from 'superagent-jsonp';

const state = {
  eventItem: {},
};

const mutations = {
  getSingleEvent(state, payload) {
    state.eventItem = payload.res;
  },
};

const actions = {
  getSingleEvent({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.douban.com/v2/event/' + payload.id)
        .use(jsonp({ timeout: 10000 }))
        .end((err, res) => {
          console.log(res);
          if (!err) {
            commit('getSingleEvent', {
              res: res.body,
            });
            resolve(res);
          } else {
            reject();
          }
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};

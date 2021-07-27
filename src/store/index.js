import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    SET_POST(state, status) {
      state.posts = status;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
        .then((response) => response.json())
        .then((json) => {
          const finalPosts = json.map((item) => ({
            ...item,
            author: 'Jan Nowak',
          }));
          commit('SET_POST', finalPosts);
        });
    },
  },
  modules: {
  },
});

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
    fetchPosts(context) {
      fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
        .then((response) => response.json())
        .then((json) => context.commit('SET_POST', json));
    },
  },
  modules: {
  },
});

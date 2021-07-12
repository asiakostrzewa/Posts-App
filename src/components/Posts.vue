<template>
  <div class="wrapper"> {{ posts }} </div>,
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Posts',
  props: {
  },
  data() {
    return {
      section: 'home',
      posts: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10';
      const response = await axios.get(url);
      const { results } = response.data;
      this.posts = results.map((post) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
        author: 'Jan Nowak', // this section has been permanently added due to its lack in API
      }));
    },
    mounted() { this.fetchPosts(); },

    ...mapActions(['fetchPosts']),

  /* created() {
    this.$store.dispatch('fetchPosts');
  },

  comuted: {
    posts() {
      return this.$store.state.posts;
    },
  }, */
  },
};
</script>

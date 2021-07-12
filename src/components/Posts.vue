<template>
  <div class="wrapper"> {{ posts }} </div>,
</template>

<script>
import axios from "axios"
import { mapActions } from 'vuex';

export default {
  name: 'Posts',
  props: {
  },
  data() {
    return {
      section: "home",
      posts: [],
      loading: false,
      error: null,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`
        const response = await axios.get(url)
        const results = response.data.results
        this.posts = results.map(post => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body,
          author: "Jan Nowak", // this section has been permanently added due to its lack in API
        }))
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          }
        }
      }
      this.loading = false
    },
  },

  mounted() {
    this.fetchPosts()
  },
  ...mapActions(['fetchPosts',
  ]),
};
}

/* created() {
    this.$store.dispatch('fetchPosts');
  }
  comuted: {
    posts() {
      return this.$store.state.posts;
    },
  }, */

</script>

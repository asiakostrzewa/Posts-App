<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
<Post :post="post" />
</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'Posts',
  props: {
  },
  components: { Post },
  data() {
    return {
      section: 'home',
      loading: false,
      error: null,
    };
  },
  created() {
    this.$store.dispatch('fetchPosts');
  },
  computed: mapState({
    posts: (state) => state.posts,
  }),

  methods: {
  },
};
</script>

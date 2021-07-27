<template>
<h1>Posts App : Home</h1>
  <ul class="list">
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

<style lang="scss" scoped>
@import '../styles/variables.scss';

h1 {
  color: $main-color;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.list {
  list-style: none;
  padding: 0;
  max-width: 100%;
  display: grid;
}

@media (min-width: $tablet) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

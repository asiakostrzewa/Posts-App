<template>
  <div>
  <h2>{{ post.title }}</h2>
  <p>{{ post.body }}</p>
  <h3>{{ post.author }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: { type: Object },
  },
};
</script>

<style>

</style>

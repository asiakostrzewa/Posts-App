<template>
  <article class="wrapper">
  <h2 class="title">{{ post.title }}</h2>
  <div class="description" :class="{ expanded : isExpanded }">{{ post.body }}</div>
  <button class="read-more-btn" v-on:click="toggleText">
  {{ isExpanded ? "show less" : "read more" }}</button>
  <h3 class="author">{{ post.author }}</h3>
  </article>
</template>

<script>

export default {
  name: 'Post',
  props: {
    post: { type: Object },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

  .wrapper {
    background-color: white;
    margin: 0 0 20px 0;
    padding: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
    text-align: center;
  }

  div {
    color: $text-color;
    text-align: center;
  }

  .title {
    font-size: 22px;
  }

  .description {
    font-weight: 300;
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .expanded {
    white-space: initial;
  }

  .read-more-btn {
    outline: none;
    border: none;
    background-color: transparent;
    margin: 10px 0;
    color: $main-color;
  }

  .title::first-letter,
  .description::first-letter {
    text-transform: uppercase;
  }

  .author {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    text-align: right;
  }
</style>

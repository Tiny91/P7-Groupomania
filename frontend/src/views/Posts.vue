<template>
    <img alt="Groupomania"  src='../assets/groupomania.png' />
    <Post v-for="post of posts"
    :key="post.id"
    :title="post.title"
    :content="post.content"
    ></Post>
</template>

<script>
import Post from '../components/Post.vue'
export default {
  components: {
    Post
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    fetch('http://localhost:3000/api/posts')
      .then(response => response.json())
      .then(response => { this.posts = response })
  }
}
</script>

<style scoped>

</style>

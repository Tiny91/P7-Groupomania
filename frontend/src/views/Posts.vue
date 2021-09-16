<template>
    <img alt="Groupomania"  src='../assets/groupomania.png' />
    <div><CreatePost></CreatePost></div>
    <Post v-for="post of posts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :content="post.content"
    :UserId="post.UserId"
    ></Post>
</template>

<script>
import CreatePost from '../components/posts/CreatePost.vue'
import Post from '../components/posts/Post.vue'
export default {
  components: {
    Post,
    CreatePost
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    fetch('http://localhost:3000/api/posts',
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.posts = response })
  }
}
</script>

<style lang="scss" scoped>
.card{
    margin-top: 20px;
    padding-top: 20px;
    background-color: rgb(232, 232, 240);
    }
img{
    max-height: 300px;
}
h4{
    color: rgb(97, 99, 231) ;
}
p{
    margin-left: 50px;
    margin-right :20px;
}

</style>

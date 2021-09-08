<template>
  <div>
    <h3>Mon actualité</h3>
    <Post v-for="post of posts"
    :key="post.id"
    :title="post.title"
    :content="post.content"
    >
    </Post>
    <div>
        <CreatePost></CreatePost>
    </div>
  </div>

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
    const id = localStorage.getItem('userId')
    fetch(`http://localhost:3000/api/all/${id}`,
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

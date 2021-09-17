<template>
      <div><button @click="btncreate">Ajouter un post</button></div>
      <form class="jumbotron" v-show="open">
        <h6> Ecrire une publication</h6>
        <CreatePost></CreatePost>
    </form>
    <div class="card-cart-container">
      <Post v-for="post of posts.slice().reverse() "
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :content="post.content"
      :pseudo="post.pseudo"
      :UserId="post.UserId"
      :published="post.published">
      </Post>
    </div>
</template>

<script>
import CreatePost from '../components/posts/CreatePost.vue'
import Post from '../components/posts/Post.vue'
import router from '../router'
export default {
  components: {
    CreatePost,
    Post
  },
  data () {
    return {
      posts: [],
      open: false
    }
  },
  methods: {
    btncreate () {
      this.open = true
    }
  },
  created () {
    if (localStorage.getItem('pseudo')) {
      fetch('http://localhost:3000/api/posts',
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.posts = response })
    } else {
      router.push({ path: '/' })
    }
  }
}

</script>

<template>
    <h2> Administration du site </h2>
    <h3> gestion des utilisateurs</h3><br/>
    <h4> rechercher un utilisateur </h4>
    <div>
      <form @submit.prevent="findUser">
        <label for="pseudo"> pseudo : </label>
        <input id="pseudo" type="text" v-model="pseudo" name="pseudo" />
        {{pseudo}}
        <button type="submit" > ok </button>
      </form>
        <div v-for="user of users"
        :key="user.id"
        :id="user.id"
        :pseudo="user.pseudo">
        <p>l'utilisateur {{user.pseudo}} a l'identifiant {{user.id}}</p>
          <form @submit.prevent="findPosts">
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
            <button type="submit"> voir les posts </button>
          </form>
          <form @submit.prevent="findComments">
            <div v-for="comment of comments"
            :key="comment.id"
            :id="comment.id"
            :pseudo="comment.pseudo"
            :content="comment.content">
              <div class="comment">
              <h6><em>{{comment.pseudo}}:</em></h6>
              <p>{{comment.content}}</p>
              </div>
            </div>
            <button type="submit" >voir les commentaires  </button>
          </form>
          <router-link :to='`/DeleteUser/${user.id}`'>supprimer le profil </router-link>
        </div>
    </div>
</template>

<script>
import Post from '../components/posts/Post.vue'
export default {
  components: { Post },
  data () {
    return {
      pseudo: '',
      id: '',
      users: [],
      user: {},
      posts: [],
      comments: []
    }
  },
  methods: {
    findUser () {
      fetch(`http://localhost:3000/api/users/${this.pseudo}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.users = response })
    },
    findPosts () {
      fetch(`http://localhost:3000/api/posts/user/${this.pseudo}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.posts = response })
    },
    findComments () {
      fetch(`http://localhost:3000/api/comments/user/${this.pseudo}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.comments = response })
    }

  }

}
</script>

<style>

</style>

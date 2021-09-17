<template>
<Post v-bind="post"></Post>
  <div v-for="comment of comments"
    :key="comment.id"
    :id="comment.id"
    :pseudo="comment.pseudo"
    :content="comment.content">
      <div class="comment">
      <h6><em>{{comment.pseudo}}:</em></h6>
      <p>{{comment.content}}</p>
      </div>
      <div v-if="comment.UserId == UserId || Admin === 'true'">
        <router-link :to='`/ModifyComment/${comment.id}`'>modifier</router-link>
        <button @click.prevent="supComment">supprimer</button>
        </div>
  </div>
  <form >
      <input v-model="newComment.body" placeholder="Votre commentaire..." type="text" />
      <button @click.prevent="addComment" type="submit">ok</button>
    </form>
</template>

<script>
import Post from '../components/posts/Post.vue'
export default {
  components: { Post },
  data () {
    return {
      comments: [],
      comment: {},
      id: this.$route.params.id,
      post: {},
      newComment: {
        body: ''
      },
      openSup: false,
      openMod: false,
      UserId: localStorage.getItem('UserId'),
      Admin: localStorage.getItem('Admin')
    }
  },
  created () {
    fetch(`http://localhost:3000/api/posts/${this.id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.post = response })

    fetch(`http://localhost:3000/api/comments/post/${this.id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.comments = response })
  },
  methods: {
    addComment () {
      if (this.newComment.body === '') {
        console.log('champ requis')
      } else {
        this.comment = {
          content: this.newComment.body,
          pseudo: localStorage.getItem('pseudo'),
          UserId: localStorage.getItem('UserId'),
          PostId: this.id
        }
        fetch('http://localhost:3000/api/comments', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.comment)
        })
          .then(res => res.json())
          .then(() => console.log('commentaire ajouté'))
        this.$router.replace({ name: 'Posts' })
      }
    },
    supComment () {
      fetch(`http://localhost:3000/api/comments/${this.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          const data = response.data
          console.log(data)
          this.data = alert('Le commentaire a bien été supprimé !')
          this.$router.replace({ name: 'Posts' })
        })
        .catch(error => {
          error = this.errorMessage
          this.isInvalid = true
        })
    }

  }
}

</script>

<style>

</style>

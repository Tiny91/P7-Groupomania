<template>
    <!-- <img alt="Groupomania"  src='../assets/groupomania.png' /> -->
    <Post v-bind="post"></Post>
      <div v-if="post.UserId == UserId || Admin === 'true'">
          <button @click="btnMmodifier">Modifier</button>
          <button @click="btnSupprimer"> supprimer </button>
      </div>
      <div>
        <form class="modif jumbotron" v-show="openMod" @submit.prevent="modify">
        <p>
        <label for="title">titre </label>
        <input id="title" type="text" v-model="title"  name="{{title}}" />
        </p>
        <p>
        <label for="content"> </label>
        <textarea id="content" type="text" v-model="content" name="{{content}}" />
        </p>
        <button type="submit">Envoyer</button>
        <div v-show="isInvalid" class="text-danger" >
            {{errorMessage}}
        </div>
        </form>
        <form class=" sup jumbotron" v-show="openSup" @submit.prevent='sup' >
        <h6> Etes-vous sur de vouloir supprimer ce post?</h6>
        <button type='submit' class="btn btn-danger">Suppression</button>
        <div v-show="isInvalid" class="text-danger">
            {{errorMessage}}
        </div>
        </form>
      </div>
</template>

<script>
import Post from '../components/posts/Post.vue'
// import router from '../router'
export default {
  components: { Post },
  data () {
    return {
      id: this.$route.params.id,
      post: {},
      title: '',
      content: '',
      openSup: false,
      openMod: false,
      UserId: localStorage.getItem('UserId'),
      Admin: localStorage.getItem('Admin'),
      isInvalid: '',
      errorMessage: ''
    }
  },
  created () {
    fetch(`http://localhost:3000/api/posts/${this.id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.post = response })
  },
  methods: {
    btnMmodifier () {
      this.openMod = true
      this.openSup = false
    },
    btnSupprimer () {
      this.openSup = true
      this.openMod = false
    },
    sup () {
      fetch(`http://localhost:3000/api/posts/${this.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          const data = response.data
          console.log(data)
          this.data = alert('Le post a bien été supprimé !')
          this.$router.replace({ name: 'Posts' })
        })
        .catch(error => {
          error = this.errorMessage
          this.isInvalid = true
        })
    },
    modify () {
      if (this.content === '' || this.title === '') {
        this.isInvalid = true
        this.errorMessage = 'merci de compléter les champs'
      } else {
        this.post = {
          content: this.content,
          title: this.title,
          UserId: localStorage.getItem('UserId')
        }
        fetch(`http://localhost:3000/api/posts/${this.id}`, {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.post)
        })
          .then(res => res.json())
          .then(() => console.log(`article ${this.title} modifié`))
        this.$router.replace({ name: 'Posts' })
      }
    }
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

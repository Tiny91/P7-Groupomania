<template>
    <!-- <img alt="Groupomania"  src='../assets/groupomania.png' /> -->
  <div class="card text-center" style="width: 30rem">
    <div class="card-body">
      <h4 class="card-title">{{post.title}}</h4>
      <p class="card-text">{{post.content}}</p>
      <div v-if="id === userId ">
        <a href="#" @click="modifier">Modifier</a>
        <a href="#" @click="supprimer"> supprimer </a>
      </div>
      <div>
        <router-link to ='/CommentsByPost'> Commentaires </router-link>
        <ModifyPost v-show="openMod"></ModifyPost>
        <DeletePost v-show="openSup"></DeletePost>
      </div>
    </div>
  </div>
</template>

<script>
import DeletePost from '../components/posts/DeletePost.vue'
import ModifyPost from '../components/posts/ModifyPost.vue'
export default {
  components: { DeletePost, ModifyPost },
  data () {
    return {
      post: {},
      openSup: false,
      openMod: false
    }
  },
  created () {
    const userId = localStorage.getItem('UserId')
    const id = localStorage.getItem('PostId')
    fetch(`http://localhost:3000/api/posts/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.post = response })
  },
  methods: {
    modifier () {
      this.openMod = true
      this.openSup = false
    },
    supprimer () {
      this.openSup = true
      this.openMod = false
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

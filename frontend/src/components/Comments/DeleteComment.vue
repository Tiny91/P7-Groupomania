<template>
  <div class="titre"> Suppression commentaire </div>
  <div class="jumbotron">
    <Comment v-bind="comment"></Comment><br/>
    <div>
      <h6 class="text-danger"> Etes-vous sur de vouloir supprimer ce commentaire?</h6>
      <button type='submit' @click="supComment" class="btn-danger">oui</button>
      <div v-show="isInvalid" class="text-danger">{{errorMessage}}</div>
      <router-link :to='`/Posts`' replace><button type='submit' class="btn-info">non</button></router-link>
    </div>
  </div>
</template>

<script>
import router from '../../router'
import Comment from './Comment.vue'
export default {
  components: { Comment },
  name: 'DeleteComment',
  data () {
    return {
      id: this.$route.params.id,
      comment: {},
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    supComment () {
      fetch(`http://localhost:3000/api/comments/${this.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => console.log('commentaire supprimé'))

      router.go(-1)

        .catch(error => {
          error = this.errorMessage
          this.isInvalid = true
        })
    }
  },
  created () {
    fetch(`http://localhost:3000/api/comments/${this.id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.comment = response })
  }
}
</script>

<style>
</style>

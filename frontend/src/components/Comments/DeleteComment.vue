<template>
<div class="modal">
<h6> Etes-vous sur de vouloir supprimer ce commentaire?</h6>
<button type='submit' @click="sup" class="btn btn-danger">oui</button>
<div v-show="isInvalid" class="text-danger">
            {{errorMessage}}
</div>
<button class="btn btn-info">non</button>
</div>
</template>

<script>
// import router from '../../router'
export default {
  name: 'Deletecomment',
  data () {
    return {
      id: this.$route.params.id,
      comment: {},
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    sup () {
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

<template>
<div class="titre"> Suppression profil </div>
  <div class="jumbotron">
    <div>
      <div> <p>Suppression de toutes les publications de {{id}}?</p>
      <button type='submit' @click="deletePosts" class="btn-danger">ok</button>
      </div>
    <div class="text-danger"> Etes-vous sur de vouloir supprimer le profil de {{id}}?</div>
      <button type='submit' @click="supUser" class="btn-danger">oui</button>
      <router-link :to='`/Profil`' replace><button type='submit' class="btn-info">non</button></router-link>
    </div>
    <div v-show="isInvalid" class="text-danger"> {{errorMessage}} </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'DeleteUser',
  data () {
    return {
      users: [],
      id: this.$route.params.id,
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    deletePosts () {
      fetch(`http://localhost:3000/api/posts/user/${this.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          const data = response.data
          console.log(data)
          this.data = alert('Publications supprimées !')
        })
        .catch(error => {
          error = this.errorMessage
          this.isInvalid = true
        })
    },
    supUser () {
      fetch(`http://localhost:3000/api/users/${this.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          console.log(res)
          if (res.ok) {
            return res.json()
          }
          res.text().then(text => {
            this.isInvalid = true
            this.errorMessage = text.error
          })
        })
      router.push({ path: '/' })
    }
  }

}
</script>

<style>
.titre {
  color: #fd2d01;
  font-weight:500;
  font-size: 1.2em;
  margin-bottom: 15px;
}

</style>

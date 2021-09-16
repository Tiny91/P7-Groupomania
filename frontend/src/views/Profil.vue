<template>
  <div>
    <h2> votre compte </h2>
    <div class="card text-center" style="width: 30rem">
    <div class="card-body">
      <p class="card-title">{{user.pseudo}}</p>
      <p class="card-text">{{user.email}}</p>
      <router-link to = '../components/users/DeleteUser'> Supprimer votre profil</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import router from '../router'
export default {
  components: {

  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    if (localStorage.getItem('Admin') === 'false') {
      const id = localStorage.getItem('UserId')
      fetch(`http://localhost:3000/api/users/${id}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.user = response })
    } else {
      router.push({ path: 'Admin' })
    }
  }

}

</script>

<style>

</style>

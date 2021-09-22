<template>
  <div class=" jumbotron">
    <img alt="logo Groupomania"  src='../assets/icon-left-font-monochrome-white.png' />
    <h1> Administration / Gestion des utilisateurs  </h1>
  </div>
  <div>
    <!-- Afficher tous les utilisateurs sous forme de table -->
    <div>
      <h2> Afficher tous les utilisateurs </h2>
      <button @click="displayUsers"> Ok </button>
      <div v-for="user of users "
        :key="user.id"
        :id="user.id"
        :pseudo="user.pseudo"
        :email="user.email"
        :createdAt="user.createdAt">
        <table class=" col-10 mx-auto table table-striped" v-show="display">
          <tbody>
            <tr>
              <th class="col-2" >{{user.pseudo}} </th>
              <td> <router-link :to='`/findPostsByUser/${user.pseudo}`' > Voir les posts </router-link><br/>
                   <router-link :to='`/DeleteUser/${user.pseudo}`'>Supprimer posts/profil</router-link>
              </td>
              <td >{{user.email}}<br/>créé le:{{user.createdAt}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      display: false
    }
  },
  created () {
    fetch('http://localhost:3000/api/users',
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.users = response })
  },
  methods: {
    displayUsers () {
      this.display = !this.display
    },
    findUser () {
      fetch(`http://localhost:3000/api/users/${this.pseudo}`,
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(response => { this.users = response })
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron{
  background-color: #0b1c39;
  height: 260px;
  color: white;
  img {
    width: 200px;
    margin-top:-50px
  }
}
.table{
  background-color: rgba(255, 215, 215, .5);
  a{
    color: #fd2d01
  }
}

</style>

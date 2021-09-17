<template>
  <div class='home md-4 jumbotron'>
    <img alt="Groupomania"  src='../assets/groupomania.png' /><br/>
    <h1> Bienvenue sur le réseau social Groupomania ! </h1>
    <h2> Connectez-vous pour découvrir toutes les publications </h2>
  </div>
    <div id='login'>
    <Login/>
    </div>
</template>

<script>
import Login from '../components/users/Login.vue'
export default {
  components: {
    Login
  }
}
</script>

<style scoped>
input {
  height: 20px;
  margin: 10px;
  padding: 10px
}
button {
  height: 30px;
  padding: 5px 15px;
  background-color: rgb(214, 214, 238);
  border-radius:15px
}
#login {
  padding: 20px
}

</style>

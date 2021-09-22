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

<style>
.jumbotron {
background-color: rgb(255, 215, 215, 0.2);
padding: 15px;
margin-bottom: 10px;
}

input {
  height: 20px;
  margin: 10px;
  padding: 10px
}
button {
  height: 40px;
  min-width: 100px;
  margin: 15px;
  background-color: #0b1c39;
  color:white;
  border-radius:15px
}
#login {
  padding: 20px
}

</style>

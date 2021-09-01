<template>
  <div class='home'>
    <img alt="Groupomania"  src='../assets/groupomania.png' />
    <h1> Bienvenue sur le reseau social Groupomania ! </h1>
    <Login/>
    <h2>Pas encore inscrit?</h2>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
// @ is an alias to /src
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
</style>

<template>
  <div class='home'>
    <img alt="Groupomania"  src='../assets/groupomania.png' />
    <h1> Bienvenue sur le reseau social Groupomania ! </h1>
    <div class="inscription">
      <h3>Vous n'êtes pas encore inscrit?</h3>
      <router-link to ='./SignUp'><button type="submit" class="btn"> c'est ici !</button></router-link>
    </div>
  </div>
  <div id='login'>
    <Login/>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  components: {
    Login
  }
}

</script>

<style scoped>
.inscription{
  background-color: rgb(222, 222, 224);
  margin-left: 150px;
  margin-right: 150px;
  padding: 10px
}
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

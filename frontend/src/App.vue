<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="./assets/icon.png" alt="logo Groupomania">
        </router-link>
        <router-link to="/posts">  Publications </router-link>
        <router-link to="/Profil"> Profil  </router-link>
        <router-link to="/Admin">  Administration </router-link>
        <router-link to="/deconnect"> Se déconnecter</router-link>
      </div>
    </nav>
    <router-view/>
  </header>

<main class="container"></main>

  <footer class="bg-light">
    Groupomania - Projet d'études Openclassrooms
  </footer>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #0b1c39;
}

.navbar {
  padding: 0px;
  margin-bottom: 0px;

  img{
    width: 50px;
    height: 50px;
  }

  a {
    font-weight: bold;
    color: #0b1c39;

    &.router-link-active {
      color: #fd2d01;
    }
  }
}

footer{
    margin-top: 30px;
    padding: 40px;;
  }
</style>

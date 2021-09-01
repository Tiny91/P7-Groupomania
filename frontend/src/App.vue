<template>
  <div id="nav">
    <router-link to="/"> <img src="./assets/icon.png" id="logo" ></router-link> |
    <router-link to="/posts">  Articles</router-link> |
    <router-link to="/OnePost"> un article </router-link> |
     <router-link to="/Inscription"> s'inscrire </router-link> |
    <router-link to="/deconnect"> Se déconnecter</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo{
  height: 40px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #b1a4eb;
    }
  }
}
</style>

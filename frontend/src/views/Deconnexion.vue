<template>
  <div class="deconnect">
    <h1> A bientôt !</h1><br/>
    <router-link to='/'> retour à l'accueil </router-link>
  </div>
</template>

<script>
export default {
  created () {
    localStorage.clear()
  }
}
</script>

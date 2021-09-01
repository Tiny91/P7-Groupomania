<template>
  <form @submit="login">
    <p>
      <label for="pseudo">Votre pseudo: </label>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo" />
    </p>
    <p>
      <label for="password">Votre mot de passe: </label>
      <input id="password" v-model="password" type="text" name="password" />
    </p>
    <button type="submit">Envoyer</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      pseudo: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      e.preventDefault()
      if (this.pseudo === '' || this.password === '') {
        console.log('pseudo et mot de passe requis')
      } else {
        this.user = {
          pseudo: this.pseudo,
          password: this.password
        }
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        })
          .then(res => res.json())
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
</style>

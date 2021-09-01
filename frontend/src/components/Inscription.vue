<template>
  <form @submit="signup">
    <p>
      <label for="pseudo">Votre pseudo: </label>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo" />
    </p>
    <p>
      <label for="email">Votre email: </label>
      <input id="email" v-model="email" type="text" name="email" />
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
      email: '',
      password: ''
    }
  },
  methods: {
    signup: function (e) {
      e.preventDefault()
      if (this.pseudo === '' || this.password === '' || this.email === '') {
        console.log('champs requis')
      } else {
        this.user = {
          pseudo: this.pseudo,
          email: this.email,
          password: this.password
        }
        fetch('http://localhost:3000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        })
          .then(res => res.json())
          .then(() => console.log(`user ${this.pseudo} créé`))
      }
    }
  }
}
</script>

<style>
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

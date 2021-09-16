<template>
  <form @submit="signup" class="jumbotron">
    <div  class="md-3">
      <label for="pseudo">Votre pseudo: </label>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo" class="form-control"/>
    </div>
    <div  class="md-3">
      <label for="email">Votre email: </label>
      <input id="email" v-model="email" type="text" name="email" class="form-control" />
    </div>
    <div  class="md-3">
      <label for="password">Votre mot de passe: </label>
      <input id="password" v-model="password" type="text" name="password" class="form-control" />
    </div>
    <div>
    <button type="submit" class="btn btn-info">Envoyer</button>
    </div>
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
        fetch('http://localhost:3000/api/signup', {
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
  height: 10px;
  margin: 10px;
  padding: 10px
}
button {
  height: 30px;
  width: 170px;
  padding: 5px 15px;
  border-radius:15px
}
</style>

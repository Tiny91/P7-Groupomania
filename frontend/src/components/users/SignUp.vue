<template>
  <form @submit.prevent="signup" class="jumbotron">
    <h2> Créez votre profil </h2>
    <div >
      <label for="pseudo">Votre pseudo* </label> <br/>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo"/>
      <p class="text-muted"><em>*de 4 à 10 caractères</em></p>
    </div>
    <div  class="md-3">
      <label for="email">Votre adresse mail </label> <br/>
      <input id="email" v-model="email" type="text" name="email" />
    </div>
    <div  class="md-3">
      <label for="password">Mot de passe* </label> <br/>
      <input id="password" v-model="password" type="password" name="password" /><br/>
      <p class="text-muted"><em>*doit contenir au minimum 6 caractères dont 1 majuscule, 1 minuscule et 1 chiffre</em></p>
    </div>
    <div>
    <button type="submit">S'inscrire</button>
    </div>
    <div v-show="isInvalid" class="text-danger" > {{errorMessage}} </div>
  </form>
</template>

<script>
import router from '../../router'
export default {
  name: 'SignUp',
  data () {
    return {
      pseudo: '',
      email: '',
      password: '',
      errorMessage: '',
      isInvalid: false
    }
  },
  methods: {
    signup () {
      const modEmail = /^[a-zA-Z09.-_]+[@]{1}[a-zA-Z09.-_]+[.]{1}[a-zA-Z]+$/
      const modPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
      if (!(this.pseudo.length > 3 ||
      modEmail.test(this.email) ||
      modPassword.test(this.password))) {
        this.isInvalid = true
        this.errorMessage = 'Merci de remplir chaque champ comme indiqué'
      } else {
        this.user = {
          pseudo: this.pseudo,
          email: this.email,
          password: this.password
        }
        fetch('http://localhost:3000/api/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        })
          .then(res => {
            if (res.ok) {
              alert('inscription réussie')
              router.push({ path: '/' })
            }

            res.text().then(text => {
              this.isInvalid = true
              this.errorMessage = text
            })
          })
      }
    }
  }
}
</script>

<style>
button {
  height: 30px;
  width: 170px;
  padding: 5px 15px;
  border-radius:15px
}
</style>

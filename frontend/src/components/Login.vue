<template>
  <form @submit.prevent='login' class="jumbotron">
    <p>
      <label for="pseudo">Votre pseudo: </label>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo" />
    </p>
    <p>
      <label for="password">Votre mot de passe: </label>
      <input id="password" v-model="password" type="text" name="password" />
    </p>
    <button class="btn" type="submit" >Valider</button>
  </form>
  <div v-show="isInvalid" >
            {{errorMessage}}
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Login',
  data () {
    return {
      pseudo: '',
      password: '',
      errorMessage: 'erreur',
      isInvalid: false
    }
  },
  methods: {
    login () {
      if (this.pseudo !== '' && this.password !== '') {
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
          .then(res => {
            if (res.ok) {
              return res.json()
            }

            res.text().then(text => {
              this.isInvalid = true
              this.errorMessage = JSON.parse(text).error
            })
          })
          .then((auth) => {
            localStorage.setItem('pseudo', (auth.pseudo))
            localStorage.setItem('userId', (auth.userId))
            localStorage.setItem('token', (auth.token))
            router.push({ path: 'Posts' })
          })
      } else {
        this.isInvalid = true
        this.errorMessage = 'les champs Pseudo et mot de passe sont obligatoires'
      }
    }
  }
}

</script>

<style lang="scss" scoped>
input {
  height: 10px;
  margin: 10px;
  padding: 10px
}
button {
  height: 30px;
  width: 170px;
  padding: 5px 15px;
  background-color: rgb(211, 211, 243);
  border-radius:15px
}
</style>

<template>
<div class="jumbotron">
  <form @submit.prevent='login'>
    <div>
      <label for="pseudo">Votre pseudo </label><br/>
      <input id="pseudo" v-model="pseudo" type="text" name="pseudo" />
    </div>
    <div>
      <label for="password">Votre mot de passe </label><br/>
      <input id="password" v-model="password" type="password" name="password" />
    </div>
    <button  type="submit" >Valider</button>
    <div v-show="isInvalid" class="text-danger" >
            {{errorMessage}}
    </div>
    </form>
</div>
    <div class='signup'>
        <router-link to ='./SignUp'><button type="submit" class="btn" ><em> pas encore inscrit ?</em></button></router-link>
        </div>

</template>

<script>
import router from '../../router'
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
            console.log(auth)
            localStorage.setItem('pseudo', (auth.pseudo))
            localStorage.setItem('UserId', (auth.userId))
            localStorage.setItem('token', (auth.token))
            localStorage.setItem('Admin', (auth.admin))
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

<style >
input {
  height: 30px;
}
label {
  margin-top: 5px;
  margin-bottom: 0px;
  font-style: italic;
}
.btn {
  margin: 15px;
  width: 200px;
  background-color: #ffd7d7;
  border-radius:15px
}

</style>

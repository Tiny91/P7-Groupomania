<template>
<form @submit.prevent='sup' class="jumbotron">
<h6> Etes-vous sur de vouloir supprimer votre compte?
</h6>
<button type='submit' class="btn btn-danger">Suppression</button>
<div v-show="isInvalid" class="text-danger">
            {{errorMessage}}
</div>
</form>
</template>

<script>
import router from '../../router'
export default {
  name: 'DeleteUser',
  data () {
    return {
      user: {},
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    sup () {
      if (localStorage.getItem('UserId') || localStorage.getItem('Admin') === 'true') {
        const id = localStorage.getItem('UserId')
        fetch(`http://localhost:3000/api/users/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            console.log(res)
            if (res.ok) {
              return res.json()
            }

            res.text().then(text => {
              this.isInvalid = true
              this.errorMessage = text.error
            })
          })
        router.push({ path: 'home' })
      } else {
        this.isInvalid = true
        this.errorMessage = 'vous n êtes pas autorisé à supprimer ce compte'
      }
    }
  }
}
</script>

<style>

</style>

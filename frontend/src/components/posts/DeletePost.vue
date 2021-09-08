<template>
<form @submit.prevent='sup' class="jumbotron">
<h3> Etes-vous sur de vouloir supprimer ce post?
</h3>
<button type='submit' class="btn btn-danger">Suppression</button>
<div v-show="isInvalid" >
            {{errorMessage}}
</div>
</form>
</template>

<script>
export default {
  name: 'DeletePost',
  methods: {
    sup () {
      const id = localStorage.getItem('id')
      fetch(`http//localhost:3000/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: null
      })
        .then(response => {
          return response.json()
        })
        .then(data => console.log(data))
    }
  }
}
</script>

<style>

</style>

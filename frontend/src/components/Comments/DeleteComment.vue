<template>
<form @submit.prevent='sup' class="jumbotron">
<h6> Etes-vous sur de vouloir supprimer ce commentaire?
</h6>
<button type='submit' class="btn btn-danger">Suppression</button>
<div v-show="isInvalid" class="text-danger">
            {{errorMessage}}
</div>
</form>
</template>

<script>
// import router from '../../router'
export default {
  name: 'Deletecomment',
  data () {
    return {
      comment: {},
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    sup () {
    }
  }
}
</script>

<style>

</style>

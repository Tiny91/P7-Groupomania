<template>
    <h6> modification commentaire </h6>
    <form @submit.prevent="modify" class="modif jumbotron">
        <p>
        <label for="content">  </label>
        <textarea id="content" type="text" v-model="content" name="{{content}}" />
        </p>
        <button type="submit">ok</button>
        <div v-show="isInvalid" class="text-danger" >
            {{errorMessage}}
        </div>
      </form>
</template>

<script>
export default {
  data () {
    return {
      comment: {},
      content: '',
      id: this.$route.params.id,
      isInvalid: '',
      errorMessage: ''
    }
  },
  methods: {
    modify () {
      this.comment = {
        content: this.content,
        author: localStorage.getItem('pseudo'),
        UserId: localStorage.getItem('UserId')
      }
      fetch(`http://localhost:3000/api/comments/${this.id}`, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.comment)
      })
        .then(res => res.json())
        .then(() => console.log(`commentare de ${this.pseudo} modifié`))
      this.$router.replace({ name: 'Posts' })
    }
  }
}
</script>

<style>

</style>

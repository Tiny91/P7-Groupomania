<template>
  <div class="titre"> Modification commentaire </div>
  <div  class="jumbotron">
    <Comment v-bind="comment"></Comment>
    <form @submit.prevent="modify" >
      <p>
      <label for="content">  </label>
      <textarea type="text" v-model="content" name="{{content}}"/>
      </p>
      <button type="submit">ok</button>
    </form>
  </div>
</template>

<script>
import router from '../../router'
import Comment from './Comment.vue'
export default {
  components: { Comment },
  data () {
    return {
      comment: [],
      id: this.$route.params.id
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
        .then(() => console.log('commentaire modifié'))
      router.go(-1)
    }
  },
  created () {
    fetch(`http://localhost:3000/api/comments/${this.id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.comment = response })
  }
}
</script>

<style>

</style>

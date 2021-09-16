<template>
  <div>
    <div class="block-post">
      <h3>Ajouter un commentaire  </h3>
      <form @submit.prevent="add">
    <p>
      <label for="content">votre commentaire </label>
      <input id="content" v-model="content" type="text" name="content" />
    </p>
    <button type="submit">ajouter</button>
  </form>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'AddComment',
  data () {
    return {
      author: '',
      content: ''
    }
  },
  methods: {
    add () {
      if (this.content === '') {
        console.log('champ requis')
      } else {
        this.comment = {
          content: this.content,
          author: localStorage.getItem('pseudo'),
          UserId: localStorage.getItem('UserId'),
          PostId: localStorage.getItem('PostId')
        }
        fetch('http://localhost:3000/api/comments', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.comment)
        })
          .then(res => res.json())
          .then(() => console.log(`commentaire de ${this.author} créé`))
      }
      router.push({ path: 'OnePost' })
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

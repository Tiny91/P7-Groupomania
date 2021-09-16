<template>
  <div class="block-post">
    <h3>Créer un post</h3>
    <form @submit="create" class=" col-5 jumbotron">
      <p class="col-auto">
        <label for="title">title </label>
        <input id="title" v-model="title" type="text" name="title" class="form-control"
         />
      </p>
      <p class="col-auto">
        <label for="content">content </label>
        <input id="content" v-model="content" type="text" name="content" class="form-control" rows="3" />
      </p>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'CreatePost',
  data () {
    return {
      title: '',
      content: '',
      UserId: ''
    }
  },
  methods: {
    create: function (e) {
      e.preventDefault()
      if (this.content === '' || this.title === '') {
        console.log('champ requis')
      } else {
        this.post = {
          content: this.content,
          title: this.title,
          UserId: localStorage.getItem('UserId')
        }
        fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.post)
        })
          .then(res => res.json())
          .then(() => console.log(`article ${this.title} créé`))
      }
      router.push({ path: 'Posts' })
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

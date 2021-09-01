<template>
  <div>
    <div class="block-post">
      <h3>Créer un post</h3>
      <form @submit="create">
    <p>
      <label for="title">title </label>
      <input id="title" v-model="title" type="text" name="title" />
    </p>
    <p>
      <label for="content">content </label>
      <input id="content" v-model="content" type="text" name="content" />
    </p>
    <p>
      <label for="media"> media </label>
      <input id="media" v-model="media" type="text" name="media" />
    </p>
    <button type="submit">Envoyer</button>
  </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data () {
    return {
      title: '',
      content: '',
      media: ''
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
          media: this.media
        }
        fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.post)
        })
          .then(res => res.json())
          .then(() => console.log(`article ${this.title} créé`))
      }
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

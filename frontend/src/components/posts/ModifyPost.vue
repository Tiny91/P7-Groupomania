<template>
  <div class="block-post">
    <form @submit.prevent="modify">
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
</template>

<script>
export default {
  name: 'ModifyPost',
  data () {
    return {
      title: '',
      content: '',
      media: ''
    }
  },
  methods: {
    modify () {
      if (this.content === '' || this.title === '') {
        console.log('champ requis')
      } else {
        this.post = {
          content: this.content,
          title: this.title,
          media: this.media,
          UserId: localStorage.getItem('userId')
        }
        const id = localStorage.getItem('id')
        fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.post)
        })
          .then(res => res.json())
          .then(() => console.log(`article ${this.title} modifié`))
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

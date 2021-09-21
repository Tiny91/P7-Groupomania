<template>
    <form @submit="create" class=" mx-auto col-5 ">
      <p class="col-auto">
        <label for="title">titre </label>
        <input id="title" v-model="title" type="text" name="title" />
      </p>
      <p class="col-auto">
        <label for="content">Publication </label>
        <textarea id="content" v-model="content" type="text" name="content" class="form-control" rows="5" />
      </p>
      <button type="submit">Enregistrer</button>
    </form>
</template>

<script>
import router from '../../router'
export default {
  name: 'CreatePost',
  data () {
    return {
      title: '',
      content: '',
      UserId: '',
      pseudo: ''
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
          pseudo: localStorage.getItem('pseudo'),
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
      router.go()
    }
  }
}

</script>

<style>

</style>

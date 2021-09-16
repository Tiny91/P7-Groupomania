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
      <button type="submit">Envoyer</button>
      <div v-show="isInvalid" class="text-danger" >
            {{errorMessage}}
</div>
    </form>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'ModifyPost',
  data () {
    return {
      title: '',
      content: '',
      isInvalid: false,
      errorMessage: ''
    }
  },
  methods: {
    modify () {
      if (this.content === '' || this.title === '') {
        this.isInvalid = true
        this.errorMessage = 'merci de compléter les champs'
      } else if (localStorage.getItem('PostUserId') === localStorage.getItem('UserId') || localStorage.getItem('Admin') === 'true') {
        this.post = {
          content: this.content,
          title: this.title,
          UserId: localStorage.getItem('UserId')
        }
        const id = localStorage.getItem('PostId')
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
        router.push({ path: 'Posts' })
      } else {
        this.isInvalid = true
        this.errorMessage = 'vous n êtes pas autorisé à modifier ce post'
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

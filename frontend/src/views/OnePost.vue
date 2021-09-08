<template>
    <!-- <img alt="Groupomania"  src='../assets/groupomania.png' /> -->
  <div class="card text-center" style="width: 30rem" >
    <div class="card-body">
      <h4 class="card-title">{{post.title}}</h4>
      <p class="card-text">{{post.content}}</p>
      <a href="#" class="card-link">commentaires</a><br/>
    <router-link to ='/ModifyPost'>Modifier</router-link>
    <router-link to ='/DeletePost'>supprimer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {}
    }
  },
  created () {
    const id = localStorage.getItem('id')
    fetch(`http://localhost:3000/api/posts/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.post = response })
  }
}
</script>

<style lang="scss" scoped>
.card{
    margin-top: 20px;
    padding-top: 20px;
    background-color: rgb(232, 232, 240);
    }
img{
    max-height: 300px;
}
h4{
    color: rgb(97, 99, 231) ;
}
p{
    margin-left: 50px;
    margin-right :20px;
}
</style>

<template>
    <div class="card-cart-container">
        <div class="card text-center w-50 ">
          <div class="card-header"> publié le: {{published}}</div>
          <div class="card-body">
            <router-link :to='`/OnePost/${id}`'>
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{content}}</p>
            </router-link>
            <router-link :to='`/CommentsByPost/${id}`'>Commentaires</router-link>
            <div class="card-footer text-muted">auteur: {{pseudo}}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    UserId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    pseudo: {
      type: String,
      required: true
    },
    published: {
      type: String,
      required: true
    }
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

<template>
    <div class="container">
        <div class=" mx-auto card text-center w-50 ">
          <div class="card-header"> publié le: {{formatedDate}}  par {{pseudo}} </div>
          <div class="card-body">
            <router-link :to='`/OnePost/${id}`'>
            <h2 class="card-title">{{title}}</h2>
            </router-link>
            <p class="card-text">{{content}}</p>
          </div>
          <div>
            <router-link :to='`/CommentsByPost/${id}`'>Commentaires</router-link>
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
      type: Date,
      required: true
    }
  },
  computed: {
    // conversion date de publication
    formatedDate () {
      const published = new Date(this.published)
      return `${published.getDate()}/${published.getMonth()}/${published.getFullYear()}`
    }
  }
}
</script>

<style lang="scss" >
.card{
    margin-top:20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(255, 215, 215, 0.1);
    border-radius: 15px;
    box-shadow: 3px 3px 1px #ffd7d7;

    .card-header{
      background-color: rgba(255, 215, 215)
    }
    a{
    color: #fd2d01 ;
    }

    h2{
    color: #fd2d01 ;
    font-size: 1.2em;
    }
}

</style>

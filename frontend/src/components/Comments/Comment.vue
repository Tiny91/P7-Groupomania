<template>
    <div class="container">
      <div class="comment text-center mx-auto col-4">
        <div ><em>{{pseudo}}: </em>
        <p>{{content}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    id: {
      type: Number,
      required: true
    },
    PostId: {
      type: Number,
      required: true
    },
    UserId: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    pseudo: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.comment{
  background-color: white;
  border: 1px dotted #0b1c39;
  box-shadow: 1px 1px ;
}
.titre {
  color: #fd2d01;
  font-weight:500;
  font-size: 1.2em;
  margin-bottom: 15px;
}
form {
  margin: 15px
}

</style>

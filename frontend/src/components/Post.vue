<template>
  <figure >
    <h3>{{title}}</h3>
    <p> {{content}}</p><br/>
  </figure>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    media: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
figure{
    width: 600px;
    padding-top: 10px;
    background-color: rgb(232, 232, 240);
    }
img{
    max-height: 300px;
}
h3{
    margin-left:60px;
    color: rgb(97, 99, 231) ;
}
p{
    margin-left: 50px;
    margin-right :20px;
}

</style>

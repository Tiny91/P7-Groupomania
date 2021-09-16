<template>
  <div class="comment">
    <h6><em>{{author}}:</em></h6>
    <p>{{content}}</p>
  </div>
</template>

<script>
// import router from '../../router'
export default {
  name: 'Comment',
  props: {
    id: {
      type: Number,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}

</script>

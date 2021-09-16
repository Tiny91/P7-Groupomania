<template>
<OnePost></OnePost>
    <Comment v-for="comment of comments"
    :key="comment.id"
    :id="comment.id"
    :author="comment.author"
    :content="comment.content"
    ></Comment>
    <AddComment></AddComment>
    <DeleteComment></DeleteComment>
</template>

<script>
import Comment from '../components/Comments/Comment.vue'
import AddComment from '../components/Comments/AddComment.vue'
import OnePost from './OnePost.vue'
import DeleteComment from '../components/Comments/DeleteComment.vue'
export default {
  components: {
    Comment,
    AddComment,
    OnePost,
    DeleteComment
  },
  data () {
    return {
      comments: []
    }
  },

  created () {
    const id = localStorage.getItem('PostId')
    fetch(`http://localhost:3000/api/comments/all/${id}`,
      {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(response => response.json())
      .then(response => { this.comments = response })
  }
}

</script>

<style>

</style>

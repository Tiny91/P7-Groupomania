<template>
    <h2> Administration du site </h2>
        <DeleteUser></DeleteUser>
        <DeletePost></DeletePost>
        <DeleteComment></DeleteComment>
</template>

<script>
import DeleteUser from '../components/users/DeleteUser.vue'
import DeletePost from '../components/posts/DeletePost.vue'
import DeleteComment from '../components/Comments/DeleteComment.vue'
export default {
  components: { DeleteUser, DeletePost, DeleteComment }

}
</script>

<style>

</style>

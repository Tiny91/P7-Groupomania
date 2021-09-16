<template>
<div>
  <div class="card text-center w-50 ">
    <img src="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{content}}</p>
      <button type="submit" class="btn btn-info" @click='saveId'>Voir</button>
    </div>
  </div>
</div>
</template>

<script>
import router from '../../router'
export default {
  emits: ['saveId'],
  name: 'Post',
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
    }
  },
  methods: {
    saveId () {
      this.$emit('saveId')
      const id = this.id
      localStorage.setItem('PostId', id)
      router.push({ path: 'OnePost' })
    }
  }
}
</script>

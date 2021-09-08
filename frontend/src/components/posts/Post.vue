<template>
  <div class="card text-center" style="width: 30rem" >
  <div class="card-body">
    <h4 class="card-title">{{title}}</h4>
    <p class="card-text">{{content}}</p>
    <button type="submit" @click='saveId'>Voir</button>
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
  },
  methods: {
    saveId () {
      this.$emit('saveId')
      const id = this.id
      console.log(this.id)
      localStorage.setItem('id', (id))
      router.push({ path: 'OnePost' })
    }
  }
}
</script>

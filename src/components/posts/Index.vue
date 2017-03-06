<template lang="html">
  <div class="posts-index">
    <md-list class="custom-list md-triple-line" v-for="post in posts">
      <sk-post :post="post"></sk-post>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'posts-index',
  components: {
    SkPost: require('./Post.vue')
  },
  data () {
    return {
      posts: [
        {
          name: 'name 1',
          content: 'content 1'
        },
        {
          name: 'name 2',
          content: 'content 2'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>

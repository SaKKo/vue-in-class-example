<template lang="html">
  <div class="post-show">
    <md-list class="custom-list md-triple-line">
      <sk-post :post="post"></sk-post>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '@/api/posts.js'

export default {
  name: 'post-show',
  components: {
    SkPost: require('./Post.vue')
  },
  data () {
    return {
      post: {
        name: 'loading',
        content: ''
      }
    }
  },
  created () {
    this.fetchPost()
  },
  watch: {
    '$route': 'fetchPost'
  },
  methods: {
    fetchPost () {
      var self = this
      var postId = this.$route.params.id
      PostsApi.getPost(postId, (_post) => {
        self.post = _post
      })
    }
  }
}
</script>

<style lang="css">
</style>

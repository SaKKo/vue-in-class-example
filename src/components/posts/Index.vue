<template lang="html">
  <div class="posts-index">
    <md-list class="custom-list md-triple-line">
      <div v-for="post in posts">
        <router-link :to="{ name: 'Posts.show', params: { id: post.id }}">
          <sk-post :post="post"></sk-post>
        </router-link>
      </div>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '@/api/posts.js'

export default {
  name: 'posts-index',
  components: {
    SkPost: require('./Post.vue')
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchPosts()
  },
  watch: {
    '$route': 'fetchPosts'
  },
  methods: {
    fetchPosts () {
      var self = this
      PostsApi.getPosts((_posts) => {
        self.posts = _posts
      })
    }
  }
}
</script>

<style lang="css">
</style>

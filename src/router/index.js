import Vue from 'vue'
import Router from 'vue-router'
import PostsIndex from '@/components/posts/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    }
  ]
})

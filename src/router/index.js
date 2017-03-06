import Vue from 'vue'
import Router from 'vue-router'
import PostsIndex from '@/components/posts/Index'
import PostShow from '@/components/posts/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/posts/:id',
      name: 'Posts.show',
      component: PostShow
    }
  ]
})

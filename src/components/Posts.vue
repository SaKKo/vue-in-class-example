<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <h2>Posts</h2>
    <ol>
      <li v-for="post in posts">
        {{ post.name }}
        <br>
        {{ post.content }}
      </li>
    </ol>
    <p v-if="seen">Now you see me</p>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      seen: true,
      msg: 'Welcome to Your Vue.js App',
      posts: [{
        name: 'one',
        content: 'one content'
      },
      {
        name: 'two',
        content: 'two content'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

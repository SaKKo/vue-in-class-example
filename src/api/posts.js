import Vue from 'vue'

export default {
  getPosts (callback) {
    Vue.$http.get('https://iccs340-vue-api.herokuapp.com/posts.json')
      .then(function (response) {
        console.log(response)
        callback(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

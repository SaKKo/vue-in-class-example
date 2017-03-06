<template>
  <div id="app">
    <sk-left-navigation></sk-left-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SkLeftNavigation: require('./components/LeftNavigation.vue')
  }
}

</script>

<style>

</style>

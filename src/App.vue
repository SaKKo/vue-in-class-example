<template>
  <div id="app">

    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">My App</h2>
    </md-toolbar>

    <div>
      <md-button class="md-raised md-accent" @click.native="toggleRightSidenav">Toggle right</md-button>
      <p>Open console to see the events</p>
    </div>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'Posts' }">
            <md-icon>shopping_basket</md-icon>
            <span>Posts</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'Hello' }">
            <md-icon>shopping_basket</md-icon>
            <span>Hello</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style>

</style>

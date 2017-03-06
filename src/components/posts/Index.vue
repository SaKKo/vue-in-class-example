<template lang="html">
  <div class="posts-index">
    <md-list class="custom-list md-triple-line">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/8" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Trevor Hansen</span>
          <span>Order confirmation</span>
          <p>Thank you for your recent order from ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'posts-index'
}
</script>

<style lang="css">
</style>

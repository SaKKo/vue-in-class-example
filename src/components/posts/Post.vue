<template lang="html">
  <div class="post">
    <md-list-item>
      <md-avatar>
        <md-icon>pie_chart</md-icon>
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ post.name }}</span>
        <p>{{ post.content }}</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {
        name: '-',
        content: '-'
      }
    }
  }
}
</script>

<style lang="css">
</style>

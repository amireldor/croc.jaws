<template lang="pug">
  .notifications
    Notification(v-for="(ntf, index) in notifications"
                 v-bind:message="ntf.message"
                 v-bind:type="ntf.type"
                 v-bind:index="index").ntf

</template>

<style lang="stylus" scoped>
  .notifications
    background transparent

  .ntf
    margin 0
    border-style = 1px #c7c7c7 solid
    border-left border-style
    border-right border-style
    border-bottom border-style
    font-size 15pt

    &:last-child
      rad = 9px
      border-radius 0 0 rad rad

</style>

<script>
  import Notification from '../components/Notification.vue'
  export default {
    computed: {
      notifications() {
        return this.$store.state.Notifications.notifications
      }
    },
    components: {
      Notification
    }
  }
</script>

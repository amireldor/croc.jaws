<template lang="pug">
  #messages
    Notification(message="amir" type="cat")
    Notification(v-for="ntf in notifications" v-bind:message="ntf.message" v-bind:type="ntf.type")

</template>
<style lang="stylus" scoped>
  #messages
    background red
</style>
<script>
  import Notification from '../components/Notification.vue'
  export default {
    data() {
      return {
      }
    },
    computed: {
      notifications() {
        return this.$store.state.notifications
      }
    },
    components: {
      Notification
    },
    created() {
      console.log('amir')
      console.log('slkd', this.notifications)
      console.log('store', this.$store.state.notifications)
    }
  }
</script>

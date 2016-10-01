<template lang="pug">
  section#doc
    Notifications#messages
    CrocLine#croc-line(:name="doc.name")
    DocForm#doc-form
</template>

<style lang="stylus" scoped>
  @import '../common.styl'

  #doc
    background transparent
    margin 69px 0 common-spacing

  #messages
    position fixed
    top 0
    left 0
    right 0
    z-index: 666
    max-width common-width * 1.4
    margin auto

  #croc-line
    margin-bottom common-spacing

</style>

<script>
  import * as types from '../store/types'

  import CrocLine from '../components/CrocLine.vue'
  import DocForm from '../components/DocForm.vue'
  import Notifications from './Notifications.vue'

  export default {
    data() {
      return {
      }
    },
    computed: {
      doc() {
        return {
          ...this.$store.state.doc
        }
      }
    },
    methods: {
    },
    components: {
      CrocLine,
      DocForm,
      Notifications,
    }
  }
</script>

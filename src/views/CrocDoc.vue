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
    margin 60px 0 common-spacing

  #messages

  #croc-line
    background red
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

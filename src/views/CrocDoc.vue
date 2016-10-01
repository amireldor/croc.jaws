<template lang="pug">
  section#doc
    button(v-on:click='interesting(4)') fun test |{{ temp }}|
    #error
      p There should be an error message here if something's wrong.
    CrocLine#croc-line(:name="doc.name")
    DocForm
</template>

<style lang="stylus" scoped>
  @import '../common.styl'

  #doc
    background transparent

</style>

<script>
  import * as types from '../store/types'

  import CrocLine from '../components/CrocLine.vue'
  import DocForm from '../components/DocForm.vue'

  export default {
    data() {
      return {
      }
    },
    computed: {
      doc() {
        return this.$store.state.doc;
      },
      temp: function () {
        return `Amir2 ${this.$store.state.count} + ${this.$store.state.smart.fun}`
      }
    },
    methods: {
      interesting(howMuch) {
        this.$store.dispatch(types.INCREMENT, {fun: howMuch})
        this.$store.dispatch('test-1')
      }
    },
    components: {
      CrocLine,
      DocForm
    }
  }
</script>

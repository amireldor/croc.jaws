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
        doc: {
          name: "generous-eagle",
          body: "I like bodies",
        }
      }
    },
    methods: {
      interesting(howMuch) {
        this.$store.dispatch(types.INCREMENT, {fun: howMuch})
      }
    },
    computed: {
      croc_url() {
        return `${BASE_URL}/${this.doc.name}`
      },
      temp: function () {
        return `Amir2 ${this.$store.state.count} + ${this.$store.state.smart.fun}`
      }
    },
    components: {
      CrocLine,
      DocForm
    }
  }
</script>

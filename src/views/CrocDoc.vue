<template lang="pug">
  section#doc
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
    computed: {
      croc_url: function() {
        return `${BASE_URL}/${this.doc.name}`
      }
    },
    components: {
      CrocLine,
      DocForm
    }
  }
</script>

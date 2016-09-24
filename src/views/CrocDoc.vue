<template lang="pug">
  section#doc
    #error
      p There should be an error message here if something's wrong.
    CrocLine#croc-line(:name="doc.name")
    form#doc-form
      #doc-content
        textarea#doc-text(name="doc", placeholder="Enter stuff here...") {{doc.body}}
        input#feed-button(type="submit", value="feed to croc")
</template>

<style lang="stylus" scoped>
  @import '../common.styl'

  #doc
    background transparent

</style>

<script>
  import CrocLine from '../components/CrocLine.vue'
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
      CrocLine
    }
  }
</script>

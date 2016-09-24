<template lang="pug">
  section#doc
    #error
      p There should be an error message here if something's wrong.
    #croc-line
      router-link.link(:to="doc.name")
        | {{BASE_URL}}/
        strong {{doc.name}}
    form#doc-form
      #doc-content
        textarea#doc-text(name="doc", placeholder="Enter stuff here...") {{doc.body}}
        input#feed-button(type="submit", value="feed to croc")
</template>
<style>
</style>
<script>
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
    }
  }
</script>

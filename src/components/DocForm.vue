<template lang="pug">
  form.doc-form
    .doc-content
      textarea.doc-text(name="doc" v-model="body" placeholder="Enter stuff here...")
    input.feed-button(type="submit" value="feed to croc" v-on:click="test")
</template>

<style lang="stylus" scoped>
  @import '../common.styl'
  minimum-height = 320px

  .doc-form
    min-height minimum-height
    display flex
    flex-direction column

  .doc-content
    display block
    background common-background
    padding common-spacing
    display flex  // flex on everything!!!!

    textarea
      width 100%
      background-color transparent
      border none
      min-height minimum-height
      font-size inherit
      &:placeholder
        color lighten(black, 1%)

  .feed-button
    margin common-spacing 0 0
    align-self center
    border none
    background common-background
    padding common-spacing
    color link-color
    font-size inherit
    trans-time = 0.7
    transition background trans-time, color trans-time
    &:hover
      color lighten(link-color, 14%)
      cursor pointer

    &:disabled
      lighten-value = 34%
      color lighten(link-color, lighten-value)
      backgound lighten(common-background, lighten-value)
      cursor default

</style>

<script>
  export default{
    data() {
      return {
        body: this.$store.state.doc.body
      }
    },
    methods: {
      test(event) {
        // adds a random notification
        event.preventDefault()
        const notification = {
          message: "HI!" + new Date(),
          type: Math.random() > 0.5 ? "error" : "info"
        }
        this.$store.dispatch('add-notification', { notification })
      }
    }
  }
</script>
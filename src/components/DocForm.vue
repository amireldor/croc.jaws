<template lang="pug">
  form#doc-form
    #doc-content
      textarea#doc-text(name="doc", placeholder="Enter stuff here...") {{body}}
    input#feed-button(type="submit", value="feed to croc")
</template>

<style lang="stylus" scoped>
  @import '../common.styl'
  minimum-height = 320px

  #doc-form
    min-height minimum-height
    display flex
    flex-direction column

  #doc-content
    display block
    background common-background
    padding common-spacing
    display flex  // flex on everythign!!!!

    textarea
      width 100%
      background-color transparent
      border none
      min-height minimum-height
      font-size inherit

  #feed-button
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
    data(){
      return {
        body: 'I like croc.farm I use it all the time\nI also use google from time to time, time'
      }
    }
  }
</script>
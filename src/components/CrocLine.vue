<template lang="pug">
  div(:class="myClass")
    router-link.link(:to="name")
      | {{BASE_URL}}/
      strong {{name}}
</template>

<style lang="stylus" scoped>
  @import '../common.styl'
  div
    background common-background
    padding common-spacing
    text-align center
    a
      color: link-color

    transform scaleX(0) scaleY(0)  // Initially hidden
    transition transform 0.12s
    & .show  // Add a class and you see it
      transform scale(1) scaleY(1)

</style>

<script>
  export default {
    props: ['name'],
    data(){
      return {
        myClass: ''
      }
    },
    methods: {
      show: function () {
        this.myClass = 'show'
      }
    },
    created: function () {
      setTimeout(() => {
        this.show()
      }, 1200)
    }
  }
</script>

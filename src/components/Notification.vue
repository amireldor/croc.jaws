<template lang="pug">
  .notification(:class='type')
    span.message {{ message }}
    a(role="button" v-on:click="close").close close

</template>

<style lang="stylus" scoped>

  common-alpha = 0.886

  .notification
    color black
    text-align center
    padding 7px 0
    position: relative

  .info
    background alpha(#56ea6f, common-alpha)

  .error
    background alpha(#FF0C10, common-alpha)

  .close
    text-decoration underline
    position absolute
    right 14px
    cursor pointer
    border-radius 5px
    display inline-block
    padding 0 3px

    &:hover {
      background alpha(white, 0.8)
      color #555
    }
    &:active {
      background white
      color #aaa
    }


</style>

<script>
  import {REMOVE_NOTIFICATION} from '../store/types'

  export default {
    props: ['message', 'type', 'index'],
    methods: {
      close() {
        this.$store.commit(REMOVE_NOTIFICATION, {index: this.index})
      }
    },
    created() {
    }
  }
</script>

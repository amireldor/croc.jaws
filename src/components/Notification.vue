<template lang="pug">
  .notification(:class='type')
    span.message {{ message }}
    amir2

</template>
<style lang="stylus" scoped>
    div
        background red
</style>
<script>
  export default {
    props: ['message', 'type'],
    data(){
      return {
      }
    },
    components: {
    }
  }
</script>

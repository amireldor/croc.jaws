<!--THIS Is TEMP FROM PREVIOUS PROJECT FOR REFERENCE TEMP SOON DEAD -->
<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
  <!--<meta charset="UTF-8">-->
<template lang="pug">
  #app
    router-view
</template>

<script>
</script>

<style lang="stylus">
  @import './common.styl'

  body
    background url('./assets/blurrycroc.jpg') repeat
    background-size cover
    margin 0
    font-size 22pt
    font-family font

  #app
    display flex
    flex-direction column
    align-items center

  #croc-line, #doc-form
    width common-width
    @media narrow
      width 90vw

</style>

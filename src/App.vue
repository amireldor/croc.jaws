<!--THIS Is TEMP FROM PREVIOUS PROJECT FOR REFERENCE TEMP SOON DEAD -->
<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
  <!--<meta charset="UTF-8">-->
  <!--<title>croc.farm</title>-->
  <!--<link rel="stylesheet" type="text/css" href="static/crocfarm.css"/>-->

  <!--<script>-->
    <!--{% if meta %} window.meta = {{ meta|tojson }}; {% endif %}-->
  <!--</script>-->

<!--</head>-->
<!--<body>-->

<!--<div id="app">-->
<!--</div>&lt;!&ndash; app &ndash;&gt;-->

<!--<script src="static/crocfarm.js"></script>-->
<!--</body>-->
<!--</html>-->

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

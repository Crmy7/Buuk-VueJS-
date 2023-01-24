<template>
      <h2 class="PurpleText">{{PurpleText}}</h2>
  </template>
  
  <script lang="ts">
  export default {
    name: 'PurpleText',
    props: {
        PurpleText: String,
    },
  }
  </script>

<style lang="scss">
h2{
    background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 63px;
}

</style>
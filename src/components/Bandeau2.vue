<template>
    <div class="bandeau2">
        <div class="bloc">
            <div class="img"></div>
            <h1 data-aos="fade-in" data-aos-offset="200" data-aos-delay="150" data-aos-duration="1000">{{title}}</h1>
            <PurpleText PurpleText="en avant première." data-aos="fade-in" data-aos-offset="200" data-aos-delay="700" data-aos-duration="1000" data-aos-easing= "linear"/>
        </div>
        
    </div>

  </template>
  
  <script lang="ts">
import PurpleText from './PurpleText.vue'
  export default {
    name: 'Bandeau2',
    props: {
      title: String,
      
    },
    components: {
        PurpleText
    }
  }
  </script>

<style lang="scss">
.bandeau2{
    width: 100%;
    height: 50vh;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap !important;

    h1{
        font-size: 60px;
        color: white;
        width: 100%;
        text-align: center;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
    }
}

h1, h2, h3, p{
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
}

.bandeau2{
    background-position: center;
    background-size: contain;
    background-image: url('./img/Vector.svg') !important;
    background-repeat: no-repeat;
    background-size: 15%;
}

</style>
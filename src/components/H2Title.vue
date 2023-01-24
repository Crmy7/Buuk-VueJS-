<template>
    <div class="subtitle" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
        <h2>
            <!-- buuk, le rêve des fans de concerts. -->
            {{title}}
        </h2>
    </div>
</template>



<script lang="ts">
  export default {
    name: 'H2Title',
    props: {
      title: String,
      
    }
  }
</script>

<style lang="scss">
.subtitle{
    background-position: left;
    background-size: contain;
    background-image: url('./img/Vector2.svg') !important;
    background-repeat: no-repeat;
    background-size: 20%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 63px;
        color: white;
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding-left: 20px;
    }
}
</style>
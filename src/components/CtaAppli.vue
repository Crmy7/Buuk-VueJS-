<template>
    <div class="cta">
      <h3 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">{{title}}</h3>
      <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">{{text}}</p>
      <div class="bg-space"></div>
      <div class="store">
        <img src="../../public/img/appstore.png" alt="" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
        <img src="../../public/img/googleplaystore.png" alt="" class="googleplay" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
      </div>
    </div>
</template>


<script lang="ts">

  export default {
    name: 'CtaAppli',
    props: {
      title: String,
      text: String
    }
  }
</script>

<style lang="scss">
.cta{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    h3{
      font-family: 'Sora';
      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 63px;
      background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p{
      font-family: 'Sora';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      width: 55%;
      color: #000000;
    }

    img{
      width: auto;
      height: 100px;
    }
    .googleplay{
      width: auto;
      height: 76.5px;
    }

    .store{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
}
</style>
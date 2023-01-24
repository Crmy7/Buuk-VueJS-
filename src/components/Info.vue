<template>
    <div class="info" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
        <span>{{nb}}</span>
        <h4>{{title}}</h4>
        <p>{{text}}</p>
    </div>
    <!-- <div class="info">
        <h4>{{title}}</h4>
        <p>{{text}}</p>
    </div>
    <div class="info">
        <h4>{{title}}</h4>
        <p>{{text}}</p>
    </div> -->
</template>

<script lang="ts">

  export default {
    name: 'Info',
    props: {
      title: String,
      nb: Number,
      text: String
    }
  }
</script>

<style lang="scss">
.info{
    width: 350px;
    height: 250px;
    margin: 0px 20px 0px 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    align-content: center;
    cursor: default;
        span{
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -25px;
            left: 20px;
            background: linear-gradient(135deg, #D79CF1 0%, #967DF9 100%);
            border-radius: 14px;
            font-family: 'Sora';
            font-style: normal;
            font-weight: 800;
            font-size: 35px;
            line-height: 44px;
            color: white;
            transition: all .3s ease-in-out;
        }
        h4{
            width: 80%;
            font-family: 'Sora';
            font-style: normal;
            font-weight: 800;
            font-size: 25px;
            line-height: 38px;
            background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        p{
            width:80%;
            font-family: 'Sora';
            font-style: normal;
            font-weight: 250;
            font-size: 15px;
            line-height: 23px;

            color: #FFFFFF;
        }
}
</style>
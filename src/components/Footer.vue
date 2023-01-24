<template>
    <footer>
        <div class="leftFooter">
            <a href="">buuk</a>
        </div>
        <div class="rightFooter">
            <a href="">Conditions de ventes</a>
            <a href="">Mentions légales</a>
            <router-link :to="`/contact`" class="phone">Un problème ? +33 4 50 44 56 03</router-link>
        </div>

    </footer>
</template>


<script lang="ts">

  export default {
    name: 'Footer',

  }
</script>

<style lang="scss">
footer{
    width: 100%;
    height: 118px;
    background: #FAFAFA;
    display: flex;
    justify-content: right;
    align-items: center;
    align-content: center;
    a{
        font-family: 'Sora' !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 12.5px !important;
        line-height: 25px !important;
        color: #000000 !important;
    }

    .phone{
        font-weight: 500 !important;
    }
}

.leftFooter{
    width: 45% !important;

    a{
        font-family: 'Sora' !important;
        font-style: normal !important;
        font-weight: 800 !important;
        font-size: 40px !important;
        line-height: 75px !important;
        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        cursor: pointer;
    }
}

</style>
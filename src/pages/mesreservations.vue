<template>
    <div class="home">
      <div class="purple">
        <!-- <Welcome message="VueJS3 starter, your best VueJS starter !"/> -->
        <Nav />
        <!-- <router-link to="/about">
        <MainButton buttonText="About"/></router-link> -->
        <Bandeau3 title="Mes réservations," PurpleText="pour les concerts">
            <!-- <PurpleText PurpleText="asdijdskdhbjksdhidwhjdfbkhdgvh bnmdjshgfvh bdnsmjkfhucgj " data-aos="fade-in" data-aos-offset="200" data-aos-delay="700" data-aos-duration="1000" data-aos-easing= "linear"/> -->
        </Bandeau3>
    </div>
    <BgSpace/>
    <div class="bandeaupres" data-aos="fade-in" data-aos-offset="100" data-aos-delay="700" data-aos-duration="1000">
        <div class="bande">
        <h4 class="h4">
            Tu as 5 réservations de concerts
        </h4>
    </div>
        <div class="reserv">
            <h4>
                <span>
                    Angèle,
                </span> le 15 décembre 2021 à Paris
            </h4>
            <button>Supprimer</button>
        </div>
    </div>
    <BgSpace/>

    </div>
</template>

  
  <script>

import Bandeau3 from '../components/Bandeau3.vue'
import Nav from '../components/Nav.vue'
import PurpleText from '../components/PurpleText.vue'
import BgSpace from '../components/BgSpace.vue'



  export default {
    name: 'contact',
    components:{
        Nav,
        Bandeau3,
        PurpleText,
        BgSpace
    }
  }

  
  </script>

<style lang="scss">
.home{
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: white !important;
}


.purple{
background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
border-radius: 0px 0px 0px 150px;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
}


.bande {
    background: #F3EEFF;
    border-radius: 50px 50px 0px 0px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    .h4{
        font-size: 40px;
        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 900;
        line-height: normal !important;
    }
}

.bandeaupres{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    .reserv{
        display: flex;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100px;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 5px;
        border-radius: 20px;
        h4{
        padding-left: 20px;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
        width: 100%;
        color: #000000;
        span{
            font-weight: 800;
        }
    }
    button{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 38px;
        text-align: center;
        background-color: red !important;
        color: #FFFFFF;
        border: 0;
        border-radius: 20px;
        padding: 0px 20px;
        margin-right: 20px;
    }
    }

}
</style>
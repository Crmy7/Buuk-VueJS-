<template>
    <div class="home">
      <div class="purple">
        <!-- <Welcome message="VueJS3 starter, your best VueJS starter !"/> -->
        <Nav />
        <!-- <router-link to="/about">
        <MainButton buttonText="About"/></router-link> -->
        <Bandeau3 title="Faire une réclamation" PurpleText="à l’équipe buuk">
            <!-- <PurpleText PurpleText="asdijdskdhbjksdhidwhjdfbkhdgvh bnmdjshgfvh bdnsmjkfhucgj " data-aos="fade-in" data-aos-offset="200" data-aos-delay="700" data-aos-duration="1000" data-aos-easing= "linear"/> -->
        </Bandeau3>
    </div>
    <BgSpace/>
    <h3>
        Bienvenue sur la page de réclamation. L’équipe répondre à toutes vos demandes une fois que vous aurez rempli ce formulaire
    </h3>
    <BgSpace/>
    <div class="form">
        <input type="name" placeholder="Nom">
        <input type="name" placeholder="Prénom">
        <input type="mail" placeholder="Adresse Mail">
        <input type="phone" placeholder="Télphone">
        <textarea name="recla" id="" cols="30" rows="10" placeholder="Votre réclamation"></textarea>
        <div class="send">
            <input type="submit" value="Envoyer" class="button">
        </div>

    </div>
    <BgSpace/>
    </div>
    <Footer></Footer>
</template>

  
  <script>

import Bandeau3 from '../components/Bandeau3.vue'
import Nav from '../components/Nav.vue'
import PurpleText from '../components/PurpleText.vue'
import BgSpace from '../components/BgSpace.vue'
import Footer from '../components/Footer.vue'



  export default {
    name: 'contact',
    components:{
        Nav,
        Bandeau3,
        PurpleText,
        BgSpace,
        Footer
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

.form{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    input{
        width: 40%;
        margin: 10px;
        border-radius: 20px;
        border: 0;
        background: #F4F4F4;
        padding: 5px 20px;
        height: 50px;
        &::placeholder{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: normal;
            color: #BBBAC1;

        }
    }

    textarea{
        width: 85%;
        height: 150px !important;
        margin: 10px;
        border-radius: 20px;
        border: 0;
        background: #F4F4F4;
        padding: 20px 20px !important;
        height: 50px;
        &::placeholder{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: normal;
            color: #BBBAC1;

        }
    }

}

h3{
width: 60%;
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
text-align: center;

color: #000000;
}


input.button{
    width: 150px !important;
    padding: 10px 30px 10px 30px !important;
    border: 0px !important;
    color: white !important;
    transition: all .3s ease-in-out !important;
    background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%) !important;
    border-radius: 14px !important;
    font-family: 'Sora' !important;
    font-style: normal !important;
    font-weight: 800 !important;
    font-size: 15px !important;
    line-height: 32px !important;
    text-transform: uppercase !important;
    color: #FFFFFF !important;
}

input.button:hover{
  transform: scale(1.05) !important;
  color: #D48AE6 !important;
  background: linear-gradient(72.83deg, #ffff 0%, #ffff 100%) !important;
  cursor: pointer !important;
  box-shadow: #D48AE6 0px 0px 15px !important;
}

.send{
    width: 90%;
    display: flex;
    justify-content: right;
}
</style>
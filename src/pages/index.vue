<template>
  <div class="home">
    <div class="purple">
      <!-- <Welcome message="VueJS3 starter, your best VueJS starter !"/> -->
      <Nav />
      <!-- <router-link to="/about">
      <MainButton buttonText="About"/></router-link> -->
      <Bandeau title="Les meilleurs concerts,"></Bandeau>
      <BlocArtistes/>
      <BgSpace/>
      <H2Title title="buuk, le rêves des fans de concerts"></H2Title>
      <BgSpace/>
      <li v-for="(toto, index) in infos" :key="toto" class="liInfo">
        <Info :title="toto.title" :text=toto.text :nb=index+1></Info>
      </li>
      <BgSpace/>
      <BgSpace/>
    </div>
    <CtaAppli title="buuk, aussi sur ton téléphone !" text="Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme"></CtaAppli>
    <Footer></Footer>
  </div>
</template>


<script>
import Welcome from '../components/Welcome.vue'
import Nav from '../components/Nav.vue'
import MainButton from '../components/MainButton.vue'
import Bandeau from '../components/Bandeau.vue'
import PurpleText from '../components/PurpleText.vue'
import BlocArtistes from '../components/BlocArtistes.vue'
import BgSpace from '../components/BgSpace.vue'
import H2Title from '../components/H2Title.vue'
import Info from '../components/Info.vue'
import CtaAppli from '../components/CtaAppli.vue'
import Footer from '../components/Footer.vue'



export default {
  name: 'Home',
  data() {
    return {
      infos:[
      { title:"Choisis ton artiste", text:"Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés"},
      {title:"Réserve ton billet", text:"buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !"} ,
      {title:"Kiffe ton concert", text:"Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés"}
    ]
    }
    
  },
  components: {
    Welcome,
    Nav,
    MainButton,
    Bandeau,
    PurpleText,
    BlocArtistes,
    BgSpace,
    H2Title,
    Info,
    CtaAppli,
    Footer
  },
}

</script>

<style lang="scss">
// .home {
//   color: white;
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }

.home{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li{
  list-style-type: none;
}


.purple{
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  border-radius: 0px 0px 150px 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.liInfo{
  cursor: default;
  transition: all .5s ease-in-out;
}
.liInfo:hover{
  cursor: default;
  transform: scale(1.075);
  span{
    color: #D48AE6;
  background: linear-gradient(72.83deg, #ffff 0%, #ffff 100%);
  box-shadow: #D48AE6 0px 0px 15px;
  }
}

</style>
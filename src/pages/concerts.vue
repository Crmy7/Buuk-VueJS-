<template>
    <div class="home">
      <div class="purple">
        <!-- <Welcome message="VueJS3 starter, your best VueJS starter !"/> -->
        <Nav />
        <!-- <router-link to="/about">
        <MainButton buttonText="About"/></router-link> -->
        <Bandeau2 title="Les meilleurs concerts,"></Bandeau2>
      </div>
      <BgSpace/>
      <div class="inputfilter">
        <SearchInput/><FilterButton/>
      </div>
      <BgSpace/>
      <ConcertStyle></ConcertStyle>
      <Footer></Footer>
    </div>
</template>
  
  
  <script>
  import Nav from '../components/Nav.vue'
  import MainButton from '../components/MainButton.vue'
  import Bandeau from '../components/Bandeau.vue'
  import PurpleText from '../components/PurpleText.vue'
  import BgSpace from '../components/BgSpace.vue'
  import Footer from '../components/Footer.vue'
  import SearchInput from '../components/SearchInput.vue'
  import FilterButton from '../components/FilterButton.vue'
  import ConcertStyle from '../components/ConcertStyle.vue'
  import Bandeau2 from '../components/Bandeau2.vue'
  
  
  
  export default {
    name: 'Concerts',
    components: {
      Nav,
      MainButton,
      Bandeau,
      PurpleText,
      BgSpace,
      Footer,
      SearchInput,
      FilterButton,
      ConcertStyle,
      Bandeau2
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
background-color: white !important;
}

li{
list-style-type: none;
}


.purple{
background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
border-radius: 0px 0px 0px 150px !important;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
}

.inputfilter{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 85%;
}

</style>
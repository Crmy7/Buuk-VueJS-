<template>
  <div class="home">
    <div class="purple">
      <!-- <Welcome message="VueJS3 starter, your best VueJS starter !"/> -->
      <Nav />
      <!-- <router-link to="/about">
      <MainButton buttonText="About"/></router-link> -->
      <Bandeau title="Page A propos TEST"></Bandeau>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'
import Nav from '../components/Nav.vue'
import MainButton from '../components/MainButton.vue'
import Bandeau from '../components/Bandeau.vue'
import PurpleText from '../components/PurpleText.vue'

export default {
  name: 'About',
  components: {
    Welcome,
    Nav,
    MainButton,
    Bandeau,
    PurpleText
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

.purple{
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  border-radius: 0px 0px 150px 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
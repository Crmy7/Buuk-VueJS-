<template>
  <nav class="nav">
    <router-link to="/ed" class="Buuk">buuk</router-link>
    <router-link to="/">Accueil</router-link>
    <router-link to="/concerts">Tous les concerts</router-link>
    <router-link to="/mesreservations">Mes réservations</router-link>
    <!-- <router-link to="/concerts/{{id}}">Test</router-link> -->
    <router-link to="tel:0600000000" class="tel">+33 4 50 67 33 22</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style>
a, a:visited, a:hover{
  color: white;
  text-decoration: none;
  padding: 20px 50px;
}



/* a {
  margin: 0 15px;
} */

.nav {
  font-size: 20px;
}

.nav{
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  height: 75px;
  font-weight: 300 !important;
}

.Buuk, .Buuk:hover{
  font-family: 'Sora';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  color: #FFFFFF;
  border-right: 1px solid #595959;
  border-bottom: 1px solid #595959;
  padding: 15px 50px;
}

a.router-link-active.router-link-exact-active{
  color: #D48AE6;
  border-bottom: 1px solid #D48AE6;
  padding: 20px 50px;
}

a{
  transition: all .3s ease-in-out;
}

#root{
  margin: 0px;
}

.tel{
  position: absolute;
  right: 0;
  opacity: 0.5;
}
</style>
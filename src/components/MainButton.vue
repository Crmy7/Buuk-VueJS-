<template>
      <button data-aos="fade-left" data-aos-offset="125" data-aos-delay="50" data-aos-duration="1000">{{ buttonText }}</button>
  </template>
  
  <script lang="ts">
  export default {
    name: 'MainButton',
    props: {
      buttonText: String
    },
  }
  </script>

<style lang="scss">

button{
  padding: 10px 30px 10px 30px;
  border: 0px;
  color: white;
  transition: all .3s ease-in-out;
  background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);
  border-radius: 14px;
  font-family: 'Sora';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 32px;
  text-transform: uppercase;
  color: #FFFFFF;
}

button:hover{
  transform: scale(1.05);
  color: #D48AE6;
  background: linear-gradient(72.83deg, #ffff 0%, #ffff 100%);
  cursor: pointer;
  box-shadow: #D48AE6 0px 0px 15px;
}

</style>
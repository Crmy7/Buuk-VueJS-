<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
  export default {
    setup() {
      return {};
    },
    render: (h) => h(App),
  mounted() {
    AOS.init()
  },
  };
</script>
<template>
  <router-view/>
</template>
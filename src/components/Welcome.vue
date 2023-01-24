<template>
  <div class="welcome">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Welcome',
  props: {
    message: String,
  },
}
</script>
<template>
  <div id="app">
    <TheNavBar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TheNavBar from '@/components/TheNavbar'

  export default {
    components: {
      TheNavBar
    },
    name: 'app'
  }
</script>

<style>
  @import 'assets/css/style.css';
</style>

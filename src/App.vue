<template>
  <div id="app">
    <side-menu></side-menu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import sideMenu from './components/side-menu'

export default {
  name: 'app',
  components: {
    sideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

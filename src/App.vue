<template>
  <div id="app">
    <img class="logo" @click="$router.push('MainPage')" src="./assets/logo.png">
    <img class="logo" @click="$router.push('TestPage')" src="./assets/test.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.logo{
  width: 50px;
  height: 50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>

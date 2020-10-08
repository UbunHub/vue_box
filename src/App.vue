<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/global-styles/colors.scss";
body{
  background-color: $light-gray; 
 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

</style>

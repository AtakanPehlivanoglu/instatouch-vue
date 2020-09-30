<template>
<div id="app">
  <Header/>
  <Content/>
</div>
  
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Content from '@/components/ContentComponent.vue'

export default {
  name: 'App',
  components: { Header, Content }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
html {
  width: 400px;
  height: 400px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

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
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
html {
  width: 400px;
  height: 400px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#red{
  color: 	#D2302C
}

.e-switch-wrapper.main-button {
  width: 48px;
  height: 26px;
}

.e-switch-wrapper.main-button .e-switch-handle {
  width: 21px;
  height: 21px;
}

.e-switch-wrapper.main-button .e-switch-handle.e-switch-active {
  margin-left: -22px;
}

.e-switch-wrapper.main-button .e-switch-on, .e-switch-off{
    background-color: black;
    color: #fff;
}

.e-switch-wrapper.follow-back-button, .like-comm-button{
  float: right;
}

</style>

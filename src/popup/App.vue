<template>
<div id="app">
  <Header/>
  <Content/>
  <Footer/>
</div>
  
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Content from '@/components/ContentComponent.vue'
import Footer from '@/components/FooterComponent.vue'
export default {
  name: 'App',
  components: { Header, Content, Footer }
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

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body { margin: 0; }

#red{
  color: 	#D2302C
}
#blue {
    color: #2F4858;
    font-weight: 700;
    text-shadow: 0 0 black;
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
  background-color: white;
  margin-left: -22px;
}
.e-switch-wrapper.main-button:hover .e-switch-handle.e-switch-active {
  background-color: #D2302C;
  margin-left: -22px;
}

.e-switch-wrapper.main-button .e-switch-inner.e-switch-active .e-switch-on, .e-switch-off{
    background-color: #D2302C;
    opacity: 1;
}

.e-switch-wrapper.main-button:hover .e-switch-inner.e-switch-active .e-switch-on{
    background-color:  darkgray;
    opacity: 0.5;
}

.e-switch-wrapper.follow-back-button .e-switch-handle.e-switch-active,
.e-switch-wrapper.like-comm-button .e-switch-handle.e-switch-active{
  background-color: #D2302C;
}

.e-switch-wrapper.follow-back-button .e-switch-inner.e-switch-active .e-switch-on, .e-switch-off,
.e-switch-wrapper.like-comm-button .e-switch-inner.e-switch-active .e-switch-on, .e-switch-off{
  background-color: #D2302C;
  opacity: 0.5;
}

.e-switch-wrapper:hover.follow-back-button .e-switch-inner.e-switch-active .e-switch-on,
.e-switch-wrapper:hover.like-comm-button .e-switch-inner.e-switch-active .e-switch-on{
  background-color: #D2302C;
}

.e-switch-wrapper.follow-back-button, .like-comm-button{
  float: right;
}



</style>


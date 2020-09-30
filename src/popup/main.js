import Vue from 'vue'
import App from './App.vue'
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";

/* eslint-disable no-new */
window.$ = window.jQuery = require('jquery');
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})



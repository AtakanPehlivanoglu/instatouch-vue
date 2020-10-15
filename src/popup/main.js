import Vue from 'vue'
import App from './App.vue'
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { BootstrapVue} from 'bootstrap-vue'
import { enableRipple } from '@syncfusion/ej2-base';
/* eslint-disable no-new */
window.$ = window.jQuery = require('jquery');
Vue.use(SwitchPlugin);
Vue.use(BootstrapVue);
enableRipple(true);
new Vue({
  el: '#app',
  render: h => h(App)
})



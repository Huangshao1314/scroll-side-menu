import Vue from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css'
import './error-log'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

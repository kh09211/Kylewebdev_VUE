import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



// Add axios to the prototype so that it can be used in all components with this.$http
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

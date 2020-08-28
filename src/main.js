import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import store from './store'



// Add axios to the prototype so that it can be used in all components with this.$http
Vue.prototype.$http = Axios;

// Add url to api into global scope
Vue.prototype.$apiUrl = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

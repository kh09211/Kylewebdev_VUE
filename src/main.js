import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import store from './store'
import $ from 'jquery'
import 'animate.css';



// Add axios to the prototype so that it can be used in all components with this.$http
Vue.prototype.$http = Axios;

// Add url to api into global scope
Vue.prototype.$apiUrl = process.env.VUE_APP_API_URL;

// Function to determine if object is within the viewport using jquery
Vue.prototype.$isInViewport = function(elem, height = 0) {
  let elementTop = $(elem).offset().top + height; //height means above bottom needed before true
  let elementBottom = elementTop + $(elem).outerHeight();
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

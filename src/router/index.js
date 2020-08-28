import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CMS from '../views/CMS.vue'
import Create from '../views/Create.vue'
import store from '../store/index.js' //import store so it can be used to authenticate on the navigation gate

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cms',
    name: 'CMS',
    component: CMS
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cms/create',
    name: 'Create',
    component: Create,
  },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // global navigation guard to redirect to login if not logged in and going TO any routes other than CMS
  let loginObj = store.getters.getLoginObj;
  
  if (to.name == 'Home') {
    next(); // continue to route
  } else if (to.name == 'CMS'){
    next(); //continue to route
  } else if (loginObj.loggedIn != true) {
    next({name: 'CMS'}); // point back to the CMS/Login view
  } else {
    next(); //continue on to the desired route
  }
});

export default router

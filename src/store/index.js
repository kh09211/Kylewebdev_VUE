import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginObj: {
      loggedIn: false,
      password: null
    },
    projectsArr: []
  },
  getters: {
    getLoginObj(state) {     // ES6 NOTE: or getLoginObj: state => {}   or getLoginObj: function(state) {}
      return state.loginObj;
    }
    
  },
  mutations: {
    updateProjectsArr(state, payload) {
      state.projectsArr = payload;
    },
    updateLoginObj(state, payload) {
      state.loginObj = payload;
    }
  },
  actions: {
    refreshProjectsArr(context) {
      // Make api call to get projects then commit mutation
      this._vm.$http.get(this._vm.$apiUrl + '/projects')
      .then(res => { context.commit('updateProjectsArr', res.data) })
      .catch(err => console.log(err));
    },
    reorderProjectsArr(context, newProjectsArrOrder) {
      // call to the API to reorder ids in the new fassinon
      this._vm.$http.post(this._vm.$apiUrl + '/projects/reorder', {'password': this.state.loginObj.password, 'newProjectsArrOrder': newProjectsArrOrder})
      .then(res => {
          // The API returns an updated projects array. update the store by commiting a mutation
          context.commit('updateProjectsArr', res.data);
        })
      .catch(err => console.log(err));
    },
    login(context, password) {
      // make the api call to the back end to check password
      this._vm.$http.post(this._vm.$apiUrl + '/login', {'password': password})
        .then(res => {
          if (res.data == true) {
            // commit mutation
            context.commit('updateLoginObj',{ loggedIn: true, 'password': password })
          } else {
            // alert then clear password field
            alert('Incorrect Password, Retry.');
            document.getElementById('password').value = "";
          }
        }).catch(err => console.log(err));
    }
  },
  modules: {
  }
})

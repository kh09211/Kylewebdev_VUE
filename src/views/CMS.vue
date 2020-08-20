<template>
  <div id="cms">
    <div class="container">

      <div class="row justify-content-center text-center">
        <h1 class="text-light my-5">Kyleweb.dev CMS Portal <img src="../assets/glasses.png" alt="smiley" style="width: 80px" class="ml-2 mt-0 mt-md-n2"></h1>
      </div>
      
      <div v-if="! loginObj.loggedIn">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header text-center">
                You must login to add or edit content
              </div>
              <div class="card-body py-4">
                <div class="form-group">
                  <label for="password">Enter CMS password</label>
                  <input type="password" class="form-control" id="password" aria-describedby="password">
                </div>
                <button v-on:click="login" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        LOGGED IN!
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMS',
  data() {
    return {
      // login variable used as API token
      loginObj: {
        loggedIn: false,
        password: null
      }
    }
  },
  methods: {
    login: function() {
      let password = document.getElementById('password').value

      // make the api call to the back end to check password
      this.$http.post(this.$apiUrl + '/login', {'password': password})
        .then(res => {
          if (res.data == true) {
            // set the data variables to update the dom
            this.loginObj.loggedIn = true;
            this.loginObj.password = password;
          } else {
            alert('Incorrect Password, Retry.');
            document.getElementById('password').value = "";
          }
        }).catch(err => console.log(err));
    }
  }
} 
</script>

<style scoped>
#cms {
  background-color: #3399CC;
  height: 100vh;
  
}
</style>
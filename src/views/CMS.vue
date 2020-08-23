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
                  <input type="password" class="form-control" id="password" aria-describedby="password" @keyup.enter="login">
                </div>
                <button v-on:click="login" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div v-else>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <table class="table bg-light">
              <thead>
                <tr>
                  <th scope="col" class="ml-2">Order</th>
                  <th scope="col">Project</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="project in projectsArr" :key="project.id">
                  <td><input type="text" :value="project.order" class="ml-2" v-on:keyup="checkIds($event)" name="projectIds" :ref="'input-' + project.id"></th>
                  <td>{{ project.name }}</td>
                  <td><router-link :to="'/projects/' + project.id + '/edit'" class="ml-1"><i class="far fa-edit"></i></router-link></td>
                  <td><a href="#" v-on:click="deleteProject(project.id)"><i class="fas fa-trash-alt ml-3"></i></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row justify-content-center d-flex pb-5">
          <button id="reorder" class="btn btn-primary mr-1" @click="reorderProjects">Re-Order Projects</button>

          <router-link :to="{
            name: 'Create',
            params: {'loginObj': loginObj}
          }" class="btn btn-primary ml-1">Add New Project</router-link>
        </div>
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
      },
      projectsArr: null,
      apiUrl: this.$apiUrl
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
    },
    deleteProject: function(id) {
      console.log(id);
    },
    getIdInputs: function() {
      let idArr = [];
      document.getElementsByName('projectIds').forEach((project, index) => {
        idArr.push(parseInt(project.value))
      });
      return idArr;
    },
    reorderProjects: function() {
      // call to the API to reorder ids in the current fassin
      this.$http.post(this.$apiUrl + '/projects/reorder', this.getIdInputs())
      .then(res => {
          // update the data field
          this.projectsArr = res.data;
        })
      .catch(err => console.log(err));
    },
    checkIds: function(event) {
      // on keyup check all the ids for duplicates and 
      let idArr = this.getIdInputs();
      let indexArr = [];
      let idEdited = event.srcElement._value;
      document.getElementsByName('projectIds').forEach((project, index) => {
        // make an array of original Ids from indexes to compare against the idArr
        indexArr.push(index + 1);
      });

      // make a new array by filtering the 0-9 index array. if none of the new ids match the index, return true which adds the value to the idsMissingArr array
      let idsMissingArr = indexArr.filter(index => {
        return idArr.every(id => {
          if (id != index) {
            return true;
          } else {
            return false;
          }
        });
      });

      // color inputs of missing ids red and disable the re-order button
      if (idsMissingArr.length > 0) {
        idsMissingArr.forEach(idMissing => {
          this.$refs['input-' + idMissing][0].style.borderColor = 'red';
        });
        document.getElementById('reorder').disabled = true;
      } else {
        // clear red boxes and enable button
        indexArr.forEach(index => {
          this.$refs['input-' + index][0].style.borderColor = '';
        });
        document.getElementById('reorder').disabled = false;
      }
    }
  },
  mounted() {
    // Make api call to get projects
    this.$http.get(this.$apiUrl + '/projects')
      .then(response => {
        this.projectsArr = response.data;

        // sort array by order number
        this.projectsArr.sort((a,b) => {
          return (a.order - b.order < 0) ? -1 : 1;
        });
        })
      .catch(error => console.log(error));
    

  }
} 
</script>

<style scoped>
#cms {
  background-color: #3399CC;
  min-height: 100vh; /* solution for covering the whole page in bg color*/
}

td input {
  width:25px;
  text-indent: 3px;
}
</style>
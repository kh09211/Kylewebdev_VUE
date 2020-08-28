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
                  <input type="password" class="form-control" id="password" aria-describedby="password" @keyup.enter="login" autofocus>
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
            /* params: {'loginObj': loginObj} */
          }" class="btn btn-primary ml-1">Add New Project</router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'CMS',
  computed: {
    loginObj() {
      return this.$store.getters.getLoginObj;
    },
    projectsArr() {
      return this.$store.state.projectsArr;
    }
  },
  methods: {
    login() {
      let password = document.getElementById('password').value
      // dispatch action in the vuex store
      this.$store.dispatch('login', password);
    },
    deleteProject(id) {
      console.log(id);
    },
    getIdInputs() {
      let idArr = [];
      document.getElementsByName('projectIds').forEach((project, index) => {
        idArr.push(parseInt(project.value))
      });
      return idArr;
    },
    reorderProjects() {
      this.$store.dispatch('reorderProjectsArr', this.getIdInputs())
    },
    checkIds(event) {
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
    // on component load, dispatch action to update projects
    this.$store.dispatch('refreshProjectsArr');

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
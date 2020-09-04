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
                  <td><input type="text" :value="project.order" class="ml-2" v-on:keyup="checkIds($event)" name="projectIds" :ref="project.order"></th>
                  <td>{{ project.name }}</td>
                  <td><router-link :to="'/cms/' + project.id + '/edit'" class="ml-1"><i class="far fa-edit"></i></router-link></td>
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
      this.$store.dispatch('deleteProject', id);
    },
    reorderProjects() {
      this.$store.dispatch('reorderProjectsArr', this.getOrderInputs())
    },
  
    getOrderInputs() {
      // return an arr of current values of order input boxes
      let orderArr = [];
      document.getElementsByName('projectIds').forEach((project, index) => {
        orderArr.push(parseInt(project.value))
      });
      return orderArr;
    },
    checkIds(event) {
      // on keyup check all the ids for duplicates and 
      let newArr = this.getOrderInputs(); //current values of boxes
      let oldArr = []; // the original values of boxes
      let itemEdited = event.srcElement._value;

      // make an array of all the old order values
      this.projectsArr.forEach(project => {
        oldArr.push(parseInt(project.order));
      })

      // make a new array by filtering the oldArr array. if none of the newArr items match the old, returns true which adds the value to the idsMissingArr array
      let ordersMissing = oldArr.filter(oldItem => {
        return newArr.every(newItem => {
          return oldItem != newItem;
        })
      });

      // color inputs of missing orders red and disable the re-order button
      if (ordersMissing.length > 0) {
        ordersMissing.forEach(ref => {
          this.$refs[ref][0].style.borderColor = 'red';
        });
        document.getElementById('reorder').disabled = true;
      } else {
        // clear red boxes and enable button
        newArr.forEach(ref => {
          this.$refs[ref][0].style.borderColor = '';
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
  width:27px;
  text-indent: 3px;
}
</style>
<template>
	<div id="create">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8 my-5">
					<div class="card">
						<h5 class="card-header text-center">Add a New Project</h5>
						<div class="card-body">
							<label for="name" class="mt-3">Project Name:</label>
							<input type="text" class="form-control" id="name" aria-describedby="name">

							<label for="link" class="mt-3">Link:</label>
							<input type="url" class="form-control" id="link" aria-describedby="link">

							<label for="github" class="mt-3">Github:</label>
							<input type="url" class="form-control" id="github" aria-describedby="github">

							<label for="description" class="mt-3">Description:</label>
							<textarea class="form-control" id="description" aria-describedby="description"></textarea>

							<label for="techs" class="mt-3">Techs:</label>
							<div class="d-flex">
								<input type="text" class="form-control" id="techs" aria-describedby="techs">
								<button class="btn btn-primary" @click="addTech">Add</button>
							</div>
							<div v-for="(tech,index) in techs" class="border border-secondary rounded d-inline-block py-1 mt-2 mr-2 pl-2">{{ tech }} <button class="btn py-0 pr-2" @click="deleteTech(index)"><i class="fas fa-times-circle"></i></button></div>
							<br>

							<div class="my-3 text-center">* Note: Add project first, then you will be able to add photos.</div>
							<div class="row justify-content-center mt-1">
								<button class="btn btn-primary mr-1" @click="projectAddedFunc" id="add-project">Add Project</button>
								<router-link :to="'/cms'" class="btn btn-primary">Cancel</router-link>
								<button @click="testFetch()">Test</button>
							</div>

							<div v-if="projectAdded" class="mt-5">
								<div class="row justify-content-between mx-0" >
									<input type="file" class="" id="photo" @change="fileListener">
									<button class="btn btn-primary" id="add-photo" disabled>Add</button>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Create',
	data() {
		return {
			techs: [],
			photo: null,
			projectAdded: false
		}
	},
	computed: {
		photoName() {

		},
	},
	methods: {
		addTech() {
			let newTech = document.getElementById('techs');

			this.techs.push(newTech.value);
			newTech.value = '';
		},
		deleteTech(index) {
			// remove item from the array by index
			this.techs.splice(index, 1);
		},
		testFetch() {
			this.$http.post('http://localhost:8000/test', this.$store.getters.getLoginObj).then(res => console.log(res)).catch(err => console.log(err));
		},
		projectAddedFunc() {
			this.projectAdded = true;
			document.getElementById('add-project').disabled = true;

		},
		fileListener() {
			// Event listener to enable/disable file add button
			let choose = document.getElementById('photo');
			let addbutton = document.getElementById('add-photo');

			if (choose.value != "") {
				addbutton.disabled = false;
			} else {
				addbutton.disabled = true;
			}			
		}
	},
	mounted() {
		//console.log(this.$store.getters.getLoginObj)
		//setTimeout(() => console.log(document.getElementById('photos')), 10000);
		
	}
}
</script>

<style>
#create {
	min-height: 100vh;
	background-color: #3399CC;
}
#description {
	height: 100px;
}
input#file-upload-button {
	background-color: green;
}
</style>
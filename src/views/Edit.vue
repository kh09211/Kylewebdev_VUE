<template>
	<div id="create">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8 my-5">
					<div class="card">
						<h5 class="card-header text-center">Add a New Project</h5>
						<div class="card-body">
							<label for="name" class="mt-3">Project Name:</label>
							<input type="text" class="form-control" id="name" aria-describedby="name" :value="project.name">

							<label for="link" class="mt-3">Link:</label>
							<input type="url" class="form-control" id="link" aria-describedby="link" :value="project.link">

							<label for="github" class="mt-3">Github:</label>
							<input type="url" class="form-control" id="github" aria-describedby="github" :value="project.github">

							<label for="description" class="mt-3">Description:</label>
							<textarea class="form-control" id="description" aria-describedby="description" :value="project.description"></textarea>

							<div class="mb-n3 mt-4 text-center">* NOTE: Submit any techs separately</div>
							<label for="techs" class="mt-3">Techs:</label>
							<div class="d-flex">
								<input type="text" class="form-control" id="techs" aria-describedby="techs">
								<button class="btn btn-primary" @click="addTech">Add</button>
							</div>
							<div v-for="(tech,index) in techs" class="border border-secondary rounded d-inline-block py-1 mt-2 mr-2 pl-2">{{ tech }} <button class="btn py-0 pr-2" @click="deleteTech(index)"><i class="fas fa-times-circle"></i></button></div>
							<br>
							
							<div class="row justify-content-center mt-4">
								<button class="btn btn-primary mr-1" @click="editProject()" id="edit-project">Submit Edit</button>
								<router-link :to="'/cms'" class="btn btn-primary">Cancel</router-link>
							</div>

							<hr>
							<div v-if="projectAdded" class="mt-3">
								<div class="row justify-content-between mx-0" >
									<input type="file" class="" id="photo" @change="fileChosen" ref="addPhotoInput">
									<button class="btn btn-primary" id="add-photo" @click="uploadPhoto()" disabled>Add</button>
								</div>
								<div class="row">
									<div class="col-6 mt-3" v-for="(photoFile, index) in photos" :key="photoFile">
										<img :src="$apiUrl + '/photos/' + photoFile" class="w-100" @click="deletePhoto(index)">
									</div>
								</div>
								<div class="row justify-content-center mt-3" v-show="photos.length > 0">
									* NOTE: Click photo to remove it
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
	name: 'Edit',
	data() {
		return {
			photo: null,
			projectAdded: true,
			file: ''
		}
	},
	computed: {
		photos() {
			return this.project.photos;
		},
		projectId() {
			return this.$route.params.id;
		},
		project() {
			return this.$store.state.projectsArr.find(project => project.id == this.projectId);
		},
		techs() {
			return this.project.techs;
		}
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
		editProject() {
			// validate the form inputs are filled then dispatch edit

			let projectInputsArr = ['name', 'link', 'github', 'description'];

			// set all bordersColors blank
			projectInputsArr.forEach(input => {document.getElementById(input).style.borderColor = ''});
			document.getElementById('techs').style.borderColor = '';
		
			// check that all fields are filled and if not, light them red
			let required = projectInputsArr.filter(input => {
				return (document.getElementById(input).value == "") ? true : false;
			})
			if (this.techs.length == 0) {
				required.push('techs');
			}
			
			if (required.length > 0) {
				required.forEach(input => {
					document.getElementById(input).style.borderColor = 'red';
				})
			} else {
				// grab the project being edited then change properties

				let editedProject = this.project;
				projectInputsArr.forEach(input => {
					editedProject[input] = document.getElementById(input).value;
				});
				editedProject.techs = this.techs;
				
				// dispatch action with project data
				this.$store.dispatch('editProject', editedProject);
			}
			
	
		},
		fileChosen() {
			// enable/disable file add button
			let choose = document.getElementById('photo');
			let addbutton = document.getElementById('add-photo');

			if (choose.value != "") {
				addbutton.disabled = false;
			} else {
				addbutton.disabled = true;
			}			
		},
		uploadPhoto() {
			//console.log(this.$store.state.projectsArr.find(project => project.id == this.projectId));
		
			// get the id. the recently created project is the last one in state
			let projectId = this.projectId;
			
			// assign the file to an variable using the file api unsing a ref
			this.file = this.$refs.addPhotoInput.files[0];

			// action for api call
			this.$store.dispatch('uploadPhoto', {'id': projectId, 'file': this.file});
		
		},
		deletePhoto(index) {
			// action for api call
			this.$store.dispatch('deletePhoto', {'id': this.projectId, 'photoIndex': index});
		}
	},
	mounted() {
		//console.log(this.photos)
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
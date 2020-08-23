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


							<label for="name" class="mt-3">Project Name:</label>
							<input type="text" class="form-control" id="name" aria-describedby="name">

							<a href="#" class="btn btn-primary">Go somewhere</a>
							<router-link :to="'/cms'" class="btn btn-primary">Cancel</router-link>
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
			techs: []
		}
	},
	props: {
		loginObj: {
			type: Object,
			default: null
		},
		
		},
	beforeRouteUpdate(to, from, next) {
		// navigation guard to redirect to login if not logged in
		console.log('notlogged')
		if (from.name != 'CMS' || this.loginObj.loggedIn != true || this.loginObj == null) {
			
			next({name: 'CMS'}); // point back to the CMS/Login view
		} else {
    		//next(); //continue on to the desired route
  		}
	},
	methods: {
		addTech() {
			let newTech = document.getElementById('techs');
			console.log(newTech);
			this.techs.push(newTech.value);
			newTech.value = '';
		},
		deleteTech(index) {
			console.log(index);
		}
	},
	mounted() {
		
		setTimeout(() => console.log(this.loginObj), 3000);
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
</style>
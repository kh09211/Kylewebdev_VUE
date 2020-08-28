<template v-if="projectsReverse">
	<div id="portfolio" class="container">
		<br>
		<div class="container-md" style="text-align: center;">
			<h1 style="color: #3399CC;"><em><u>Portfolio</u></em></h1>
			<br>
			<p class="mt-3 mx-3 pb-3">&nbsp; Hello! My name is Kyle and I'm a Web Developer from the United States. I handle everything from the webserver and database to custom front end styling. Here you will find some of my personal projects and freelance work that I have completed along with their descriptions and code. Check out my <a href="http://github.com/kh09211" target="_blank">GitHub!</a> For more info about me, see my <a href="#about">About</a> page.</p>
		</div>
		<div class="row justify-content-center">

				<div v-for="project in projectsReverse" :key="project.id" class="col-md-6">
					<div class="rounded text-center mt-4 fulllength">
						<p>
						<a :href="project.link" target="_blank">
							<img class="img-fluid border-bottom" :src="require('../assets/projects_images/' + project.photos[0])" alt="screenshot photo" />
							<br><br>
							<h3><b>{{ project.name }}</b></h3>
						
							Link</a> to view website<br>
							<span v-if="project.github == 'private'">
								GitHub repository is currently private<br>
							</span>
							<span v-else>
								Check out the code at my <a :href="project.github" target="_blank">GitHub</a><br>
							</span>
							Technologies Used: <i>{{ techsJoined(project.techs) }}</i><br><hr>
							<div class="desc"><i>{{ project.description }}</i></div>
						</p>
					</div>
				</div>

		</div>
		<div class="row justify-content-center align-items-center d-flex pt-5">
			<div><img class="rounded-circle mr-1" src="../assets/kyle_square.jpg" alt="kyle photo" style="height: 85px"></div>
			<form action="#contact">
				<button class="btn btn-outline-dark ml-1" type="submit" style="font-size:16px;">Hire Kyle</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  	name: 'Portfolio',
	methods: {
		techsJoined: function(techs) {
			// join the techs array into an inline list
			return techs.join(", ");
		}
	},
	computed: {
		projectsReverse() {
			// return reversed array from the state
			return this.$store.state.projectsArr.reverse();
		}
	},
	mounted() {
		// refresh the state by calling dispatch in vuex
		this.$store.dispatch('refreshProjectsArr');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	div.desc {
		text-align: justify;
		/* margin: 0 5px 20px 5px;  <--- Use these margins if border added to cols */
	}

	div.fulllength {
		/* This css below tries to keep the bottom border of each col equal at all screen sizes */
		height: 95%;
	}

	#portfolio {
		margin-top: 10vh;
		margin-bottom: 15vh;
	}

	a {
    	color: #3399CC;
	}

	a:hover {
	color: #696969;
	text-decoration: none;
	}

</style>

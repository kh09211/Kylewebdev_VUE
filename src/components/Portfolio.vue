<template v-if="projectsReverse">
	<div id="portfolio" class="container">
		<br>
		<div class="container-md" style="text-align: center;">
			<h1 id="header-text"><em>Portfolio</em></h1>
			<br>
			<p class="mt-3 mx-3 pb-3">&nbsp; Hello! My name is Kyle and I'm a Web Developer from the United States. I handle everything from the webserver and database to custom front end styling. Here you will find some of my personal projects and freelance work that I have completed along with their descriptions and code. Check out my <a href="http://github.com/kh09211" target="_blank">GitHub!</a> For more info about me, see my <a href="#about">About</a> page.</p>
		</div>
		<div class="row justify-content-center">

			<div v-for="project in projectsReverse" :key="project.id" class="col-md-6">
				<div class="text-center  mt-5 mb-4 project-box" @click="showModalFunc(project.id)">
					
					<h3 id="project-name" class="pb-1"><b>{{ project.name }}</b></h3>
					<div id="project-photo-box">
						<img src="../assets/titlebar.jpeg" class="img-fluid border-top border-left border-right rounded-top">
						<!-- images 1100 x 825 -->
						<img id="project-photo" class="img-fluid border" :src="$apiUrl + '/photos/' + project.photos[0]" alt="screenshot photo" />
					</div>
					<div id="project-techs" class="blue-font mt-3"><strong>{{ techsJoined(project.techs) }}</strong></div>
					<div class="mt-0">Click to see more!<i class="far fa-hand-pointer ml-1"></i></div>
					
				</div>
			</div>

		</div>
		<div class="row justify-content-center align-items-center d-flex pt-5">
			<div id="hire-photo2"></div>
			<transition
				name="hire-transition2-1"
				enter-active-class="animate__animated animate__fadeIn"
				>
					<div v-show="hireVisible"><img class="rounded-circle mr-1" src="../assets/kyle_square.jpg" alt="kyle photo" style="height: 85px"></div>
				</transition>

			<form action="#contact">

				<transition
				name="hire-transition2-2"
				enter-active-class="animate__animated animate__fadeIn"
				>
					<button id="hire-button2" v-show="hireVisible" class="btn btn-outline-dark ml-1" type="submit" style="font-size:16px;">Hire Kyle</button>
				</transition>

			</form>
		</div>

		 <show-modal v-if="showTheModal" :projectId="projectToShow" @close="showTheModal = false" @stayOpen="showTheModal = true"></show-modal>

	</div>
</template>

<script>
import ShowModal from '@/components/ShowModal.vue';

export default {
  	name: 'Portfolio',
	components: {ShowModal},
	data() {
		return {
		showTheModal: false,
		projectToShow: null,
		hireVisible: false,
		}
	},
	methods: {
		techsJoined: function(techs) {
			// join the techs array into an inline list
			return techs.join(" \u2022 ");
		},
		showModalFunc(id) {
			this.projectToShow = id;
			this.showTheModal = true;
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

		// jquery to determin if button is visible note:arrow function used to access parent scope
		$(window).on('scroll', () => {
			if (this.$isInViewport(document.getElementById('hire-photo2'), 85)) {
				this.hireVisible = true;
			}
		});
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

	a, h3, .blue-font {
    	color: #3399CC;
	}

	a:hover {
	color: #696969;
	text-decoration: none;
	}

	.project-box {
		cursor: pointer;
	}

	#project-photo-box {
		box-shadow: 5px 5px 6px gainsboro;
	}

	#project-name {
		text-shadow: 5px 5px 4px gainsboro;
	}

	#project-techs {
		text-shadow: 5px 5px 4px lightgray;
	}

	#header-text {
		color: #3399CC;
		text-shadow: 5px 5px 4px gainsboro;
	}
	
</style>

<template>
	<transition name="modal">
        <div class="modal-mask">
          	<div class="modal-wrapper">
            	<div class="modal-container border">

					<!-- the close button -->
					<div class="close-modal-button row align-items-center mr-3 mr-md-5" @click="$emit('close')">
						<strong style="font-size: 18px;">Close</strong><i class="fas fa-times-circle fa-2x ml-2"></i>
					</div>
					
					<!-- the inside of the modal -->
					<div class="rounded text-center mt-4">
						<h3 style="color: #3399CC;"><b>{{ project.name }}</b></h3>
						
						<!-- the carousel -->
						<carousel-3d :controls-visible="true" :display="3">
							<slide v-for="(photo, index) in photos" :key="index" :index="index">
								<img class="img-fluid border-bottom" :src="$apiUrl + '/photos/' + project.photos[index]" alt="screenshot photo" />
							</slide>
						</carousel-3d>

						<!-- the project info -->
						<a :href="project.link" target="_blank">Link</a> to view website<br>
						<span v-if="project.github == 'private'">
							GitHub repository for this project is private<br>
						</span>
						<span v-else>
							Check out the code at my <a :href="project.github" target="_blank">GitHub</a><br>
						</span>
						Technologies Used: <i>{{ techsJoined(project.techs) }}</i><br><hr>
						<div class="desc"><i>{{ project.description }}</i></div>
						
					</div>
            	</div>
          	</div>
        </div>
    </transition>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
	name: 'ShowModal',
	components: {
		Carousel3d,
		Slide
	},
	data() {
		return {
			
		}
	},
	props: ['projectId'],
	computed: {
		photos() {
			return this.project.photos;
		},
		project() {
			return this.$store.state.projectsArr.find(project => project.id == this.projectId);
		},
		techs() {
			return this.project.techs;
		}
	},
	methods: {
		techsJoined: function(techs) {
			// join the techs array into an inline list
			return techs.join(", ");
		}
	},
	mounted() {
		//console.log('modal_mounted')
		//setTimeout(() => console.log(document.getElementById('photos')), 10000);
		
	}
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
	/*
  display: table-cell;
  vertical-align: middle; */
  margin-top: 50px;
}

.modal-container {
	max-height: 89vh;
	width: 87%;
	margin: 0px  auto;
	padding: 10px 12px 20px 12px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	overflow-y: scroll;
  
}

.close-modal-button {
	position: fixed;
	top: 10px;
	right: 30px;
	color: #ffe135;
}

.close-modal-button:hover {
	cursor: pointer;
}

.carousel-3d-container {
	max-width: 725px;
}

.carousel-3d-slide {
    
  }

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
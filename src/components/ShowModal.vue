<template>
	<transition name="modal">
        <div class="modal-mask">
          	<div class="modal-wrapper">
            	<div class="modal-container border bg-light">

					<!-- the close button -->
					<div class="close-modal-button row align-items-center mr-3 mr-md-5" @click="$emit('close')">
						<strong style="font-size: 18px;">Close</strong><i class="fas fa-times-circle fa-2x ml-2"></i>
					</div>
					
					<!-- the inside of the modal -->
					<div class="rounded text-center mt-4">
						<h3 id="project-name" style="color: #3399CC;"><b>{{ project.name }}</b></h3>
						
						<!-- the carousel -->
						<carousel-3d :controls-visible="true" :display="3" width="550" height="412">
							<slide v-for="(photo, index) in photos" :key="index" :index="index">
								<img class="img-fluid border-bottom" :src="$apiUrl + '/photos/' + project.photos[index]" alt="screenshot photo" />
							</slide>
						</carousel-3d>

						<!-- the project info -->
						<div class="mt-n2">Technologies Used:</div>

						<div class="row justify-content-center align-items-center mb-2 mt-n1 mx-3">
							<div v-for="tech in techs" class="tech-chip mx-1 mt-2">{{ tech }}</div>
						</div>

						<span v-if="project.github == 'private'">
							GitHub repository for this project is private<br>
						</span>
						<span v-else>
							Check out the code at my <a :href="project.github" target="_blank">GitHub</a><br>
						</span>

						<div id="show-more" v-show="showMore" class="text-right mr-5 mt-n4">Scroll for more <i class="fas fa-caret-down"></i></div>
						
						<a :href="project.link" target="_blank">Link</a> to view website<br>

						<hr>
						<div id="project-desc" class="desc mx-md-3"><i>{{ project.description }}</i></div>
						
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
			showMore: false
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
		},
		visibleLogic() {
			// note: arrow function used to access parent scope

			if (this.$isInViewport(document.getElementById('project-desc'), 40)) {
				this.showMore = false;
			} else {
				this.showMore = true;
			}
		},
	},
	mounted() {

		// jquery to determin if desc is visible in modal on scroll/resize
		$('.modal-container').on('scroll', () => {
			this.visibleLogic()
		});
		$(window).on('resize', () => {
			this.visibleLogic()
		});

		setTimeout(() => {this.visibleLogic()}, 200);
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
	overflow-y: auto;
  
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
	max-width: 1250px;
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

.tech-chip {
	border-style: solid;
	border-width: 1px;
	border-color: #696969;
	border-radius: 5px; /* 15px for round */
	padding: 2px 8px 2px 8px;
	white-space: nowrap;
	
}

.desc {
	font-size: 17px;
}

#project-name {
	text-shadow: 5px 5px 4px gainsboro;
}

</style>
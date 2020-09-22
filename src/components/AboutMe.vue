<template>
	<div id="about">
		<div class="container-md text-center">
			<br>
			<h1 id="header-text" class="display-4 mb-5"><i>About me</i></h1>
			<br>
			<div class="text-center">
				<img id="about-photo" src="../assets/kyle.jpg" alt="picture of kyle" style="width: 200px;" class="rounded">
			</div>
			<div class="text-left">
				<br>
				<br>
	  			<p>I know every programmer or computer guru says they started messing with computers when they were a little kid. Well I am no exception here, some of my earliest memories were of helping my dad who sold used computers out of our garage. I wrote my first lines of code at age 10 and since that time, my interest in technology has never waivered. At every point in my life I have been digging into technical projects both software and hardware. Whether it was was decompiling programs to figure out how they worked, or flashing firmware to a custom car computer, I have been and probably always will be involved and borderline obsessed with tech stuff.</p>
	  			<p>I've been tinkering with web related projects since the late 1990s. The server side and back end technologies, being most fascinating to me, got my attention first. Then came my interest in modern Javascript, frameworks, and the systems that tie the front and back ends together. They say make your vocation your vacation, well that's what I've decided to do! From styling tweaks to full-stack solutions, it would be an honor to be part of your team, to achieve and deliver the end results that you dream of. Thanks for checking out my portfolio and feel free to contact me below!</p>
	  		</div>
	  		<form action="#contact">

				<div id="hire-photo4"></div>

			  	<transition
					name="hire-transition4"
					enter-active-class="animate__animated animate__fadeIn"
					>
						<button id="hire-button4" v-if="hireVisible" class="btn btn-outline-dark mt-5 mb-3" type="submit" style="font-size:16px;">Hire Kyle</button>
				</transition>
	  			
	  		</form>
  		</div>
  	</div>
</template>

<script>

export default {
  name: 'AboutMe',
  data() {
	  return {
		  hireVisible: false
	  }
  },
  mounted() {
	// jquery to determin if button is visible note:arrow function used to access parent scope
	$(window).on('scroll', () => {
		if (this.$isInViewport(document.getElementById('hire-photo4'), 100)) {
			// this.hireVisible = true; THIS SHOWS AND UNSHOWS THE BUTTON COMPLETELY
		}
	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	#about {
		margin-top: 15vh;
		margin-bottom: 15vh;
	}

	#about-photo {
		box-shadow: 5px 5px 6px darkgrey;
	}

	#about p {
		text-indent: 20px;
	}

	#header-text {
		text-shadow: 5px 5px 4px gainsboro;
		color: #3399CC;
	}

</style>

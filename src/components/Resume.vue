<template>
  	<div id="resume" class="bluebox text-center">
		<h1 id="skillset-heading" class="display-4 text-dark"><i>Skillset</i></h1>
		<br>
		<br>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10  offset-md-1 text-left">

				<div id="section1" />
				<transition
						name="section1"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<ul v-show="section1"><b>Back End Technologies</b>
						<li>PHP 7 best practices, use of Composer, class autoloaders, class inheritance, traits, and type hinting</li>
						<li>Node.js and Express Javascript frameworks, routing, database queries, JSON web tokens, and NPM</li>
						<li>Laravel framework for PHP and use of artisan, Blade templating, Eloquent ORM, tinker, database 
					<br>migrations, user authentication, authorization, routes, resource controllers, caching and Redis</li>
						<li>REST API and Microservices using LUMEN framework for PHP and Express.js framework for Node</li>
						<li>MYSQL and SQLite, schemas and migrations, and CRUD operations both raw queries and with ORMs</li>
						<li>Middlewares, parsing data, form validation, CSRF tokens, filesystem manipulation, and JSON/XML</li>
						<li>Payment integration using Stripe, Paypal, Laravel Cashier, WooCommerce, and Wordpress</li>

						<div class="text-right mt-5" v-show="!section2"><i class="fas fa-caret-down"></i> Scroll For More</div>
						<div id="section2" /> <!-- This dive inside prev section to prevent early rendering -->
					</ul>
				</transition>

				
				<transition
						name="section2"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<ul v-show="section2"><b>Front End Technologies</b>
						<li>Javascript (ES6), API/AJAX calls using Axios and jQuery, customized carousels, modals, and pop-ups</li>
						<li>React.js library for Javascript and creation of user interfaces using components, props, and events</li>
						<li>Vue.js framework for Javascript and the use of VueX, Vue-CLI, Vue Router, and authorization gates</li>
						<li>Single Page Applications (SPA) principles, state management, and integration with back end APIs</li>
						<li>HTML 5 markup, visual design, applied accessibility, and mobile first website design principles</li>
						<li>Bootstrap 4, CSS 3, CSS Flexbox, CSS Grid, SASS, media queries, CSS animations and transitions</li>
						<li>Experience with Zeplin, Figma, and turning UI/UX designs into functional pixel perfect front ends</li>

						<div id="section3" />
					</ul>
				</transition>

				
				<transition
						name="section3"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<ul v-show="section3"><b>General Programming</b>
						<li>Object oriented (OOP), functional, and procedural programming principles and design practices</li>
						<li>Understanding of Models, Views, Controllers, MVC and MVVM frameworks, and state management</li>
						<li>Algorithm scripting, data structures, regular expressions, code debugging and refactoring</li>
						<li>GIT/Git-Hub versioning software, initializing repositories, cloning, forking, commits, revert versions</li>
						<li>Self-taught and capable of quickly learning new languages, technologies, and programming styles</li>

						<div id="section4" />
					</ul>
				</transition>

				
				<transition
						name="section4"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<ul v-show="section4"><b>System Administration</b>
						<li>Proficiency with the shell command line, SSH, FTP,  shell scripting, and custom kernel compilation</li>
						<li>Deployment of application code to servers, setting up databases, caching, special configurations</li>
						<li>Ubuntu server, Red-hat server, Arch distributions, package management, setup of SMTP mail servers</li>
						<li>AWS cloud management, EC2 instances, Route 53 and hosted zone DNS name record configurations</li>
						<li>Apache2 and NGINX web server setup, virtual servers, reverse proxies, and related config/modules</li>
						<li>Maintain security through SSL certificate installation, routine updates, upgrades, and patches</li>
						<li>Migration of websites and databases between hosting companies, webservers, and domains</li>

						<div id="section5" />
					</ul>
				</transition>


				<transition
						name="section5"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<ul v-show="section5"><b>Other Relevant Skills/Certs</b>
						<li>Responsive Web Design Certification (300 hours) - FreeCodeCamp.org</li>
						<li>Javascript Algorithms and Data Structures Certification (300 hours) - FreeCodeCamp.org</li>
						<li>Experience with Matlab, Basic, Visual Basic, C, Compilers and Decompilers</li>
						<li>ASE Automotive Certifications - Electrical Systems / Engine Repair</li>
						<li>Spanish at the B1 level and TEFL teaching certification from Full-Circle</li>
						<li>Custom wiring harnesses, relay and controller boards, Megasquirt PCM, and standalone circuitry</li>
						<li>Fine tuning of electronic fuel injection and ignition systems for racing applications</li>

						<div id="section6" />
					</ul>
				</transition>
				</div>


				<transition
						name="section6"
						enter-active-class="animate__animated animate__fadeIn animate__slow"
						>
					<!-- certs have .567 ratio -->
					<div v-show="section6" class="row mt-5 mx-1 mx-md-5 px-md-5 justify-content-center">
						<div class="col-md-6 mt-4 mt-md-0">
							<a href="https://www.freecodecamp.org/certification/fcc6f128c61-5cee-47c7-b9fd-7124cccdffe1/front-end-libraries" target="_blank">
								<img class="img-fluid rounded shadow" src="../assets/certs/frontend-cert.png" />
							</a>
						</div>
						<div class="col-md-6">
							<a href="https://www.freecodecamp.org/certification/fcc6f128c61-5cee-47c7-b9fd-7124cccdffe1/javascript-algorithms-and-data-structures" target="_blank">
								<img class="img-fluid rounded shadow" src="../assets/certs/javascript-cert2.png" />
							</a>
						</div>
						<div class="col-md-6 mt-4 pt-1">
							<a href="https://www.freecodecamp.org/certification/fcc6f128c61-5cee-47c7-b9fd-7124cccdffe1/responsive-web-design" target="_blank">
								<img class="img-fluid rounded shadow" src="../assets/certs/fcccert.jpg" />
							</a>
						</div>
						<div class="col-md-6 mt-4 pt-1 mb-3">
							<img class="img-fluid rounded shadow border" src="../assets/certs/degree-uga.jpg" />
						</div>


						<div id="hire-photo3"></div> <!-- Moved here to prevent firing prematurely -->

					</div>
				</transition>

				
			</div>
			<div class="row justify-content-center">
				<form action="#contact">

					<transition
						name="hire-transition3"
						enter-active-class="animate__animated animate__tada animate__delay-1s"
						>
							<button id="hire-button3" v-show="hireVisible" class="btn btn-outline-dark mt-5" type="submit" style=" ">Hire Kyle</button>
					</transition>
					
				</form>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Resume',
  data() {
	  return {
		   hireVisible: false,
		   section1: false,
		   section2: false,
		   section3: false,
		   section4: false,
		   section5: false,
		   section6: false, 
	  }
  },
  mounted() {
	// jquery to determin if button is visible note:arrow function used to access parent scope
	$(window).on('scroll', () => {
		if (this.$isInViewport(document.getElementById('hire-photo3'), 0)) {
			this.hireVisible = true;
		}

		
		// jquery to determine and fire off the transiton with a loop NOTE: i is the number of sections
		
		for (let i = 1; i <= 6; i++) {
			if (this.$isInViewport(document.getElementById('section' + i.toString(), 0))) {
			this['section' + i.toString()] = true;
		}
		}
		
		
	});
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.bluebox {
	/* resume tab */
	background-color: #3399CC;
	width: 100%;
	padding-top: 15vh;
	padding-bottom: 15vh;
}

#resume ul {
	/* background-color: grey; */
	
	display: block;
	float: left;
}

#resume ul b {
	color: #343a40;
	text-shadow: 0px 0px 2px whitesmoke;
	font-size: 25px;
	margin-top: 10px;
	
}

#resume ul li {
	color: #282828;
	/* text-shadow: 0px 0px 1px whitesmoke; */
	font-size: 17px;
	margin-top: 10px;
}

#skillset-heading {
	text-shadow: 0px 0px 4px whitesmoke;
}

#hire-button3 {
	font-size:16px;
	box-shadow: 0px 0px 2px whitesmoke;
	
}

</style>

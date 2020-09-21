<template>
  	<div id="resume" class="bluebox text-center">
		<h1 id="skillset-heading" class="display-4 text-dark"><i>Skillset</i></h1>
		<br>
		<br>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10  offset-md-1 text-left">

					<ul><b>General Programming</b>
						<li>Object oriented (OOP), functional, and procedural programming principles and design practices</li>
						<li>Understanding of Models, Views, Controllers, MVC and MVVM frameworks, and state management</li>
						<li>Algorithm scripting, data structures, regular expressions, code debugging and refactoring</li>
						<li>GIT/Git-Hub versioning software, initializing repositories, cloning, forking, commits, revert versions</li>
						<li>Self-taught and capable of quickly learning new languages, technologies, and programming styles</li>
					</ul>

					<ul><b>Back End Technologies</b>
						<li>PHP 7 best practices, use of Composer, class autoloaders, class inheritance, traits, and type hinting</li>
						<li>Laravel framework for PHP and use of artisan, blade templating, eloquent ORM, tinker, database 
					<br>migrations, user authentication, authorization, routes, resource controllers, caching and Redis</li>
						<li>REST API and Microservices using LUMEN framework for PHP and Express.js framework for Node</li>
						<li>MYSQL and SQLite queries, database migrations, and CRUD use with models, ORMs, and APIs</li>
						<li>Middlewares, parsing data, form validation, CSRF tokens, filesystem manipulation, and JSON/XML</li>
						<li>Payment integrations using Stripe, Paypal, Laravel Cashier, WooCommerce, and Wordpress</li>
					</ul>
					<ul><b>Front End Technologies</b>
						<li>Javascript (ES6),  API/AJAX calls using Axios and jQuery, custom carousels, modals, and pop-ups</li>
						<li>Single Page Applications (SPAs) as static websites and integration of back end APIs for CRUD ops</li>
						<li>Vue.js framework for Javascript and the use of VueX, Vue-CLI, Vue Router, and authorization gates</li>
						<li>HTML 5 markup, visual design, applied accessibility, and mobile first website design principles</li>
						<li>Bootstrap 4, CSS 3, CSS Flexbox, CSS Grid, SASS, media queries, CSS animations and transitions</li>
						<li>Experience with Zeplin, Figma, and turning UI/UX designs into functional pixel perfect front ends</li>
					</ul>
					<ul><b>System Administration</b>
						<li>Proficiency with the shell command line, SSH, FTP,  shell scripting, and custom kernel compilation</li>
						<li>Deployment of application code to servers, setting up databases, caching, special configurations</li>
						<li>Ubuntu server, Red-hat server, Arch distributions, package management, setup of SMTP mail servers</li>
						<li>AWS cloud management, EC2 instances, Route 53 and hosted zone DNS name record configurations</li>
						<li>Apache2 and NGINX web server setup, virtual servers, reverse proxies, and related config/modules</li>
						<li>Maintain security through SSL certificate installation, routine updates, upgrades, and patches</li>
						<li>Migration of websites and databases between hosting companies, webservers, and domains</li>
					</ul>
					<ul><b>Other Relevant Skills/Certs</b>
						<li>Responsive Web Design Certification (300 hours) - FreeCodeCamp.org</li>
						<li>Javascript Algorithms and Data Structures Certification (300 hours) - FreeCodeCamp.org</li>
						<li>Experience with Matlab, Basic, Visual Basic, C, Compilers and Decompilers</li>
						<li>ASE Automotive Certifications - Electrical Systems / Engine Repair</li>
						<li>Spanish at the B1 level and TEFL teaching certification from Full-Circle</li>
						<li>Custom wiring harnesses, relay and controller boards, Megasquirt PCM, and standalone circuitry</li>
						<li>Fine tuning of electronic fuel injection and ignition systems for racing applications</li>
					</ul>
				</div>
			</div>
			<div class="row justify-content-center">
				<form action="#contact">

					<div id="hire-photo3"></div>

					<transition
						name="hire-transition3"
						enter-active-class="animate__animated animate__tada"
						>
							<button id="hire-button3" v-show="hireVisible" class="btn btn-outline-dark mt-5" type="submit" style=" ">Hire Kyle</button>
					</transition>
					
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Resume',
  data() {
	  return {
		   hireVisible: false
	  }
  },
  mounted() {
	// jquery to determin if button is visible note:arrow function used to access parent scope
	$(window).on('scroll', () => {
		if (this.$isInViewport(document.getElementById('hire-photo3'), 85)) {
			this.hireVisible = true;
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

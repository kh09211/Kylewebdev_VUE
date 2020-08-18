<template>
  	<div id="resume" class="bluebox text-center">
		<h1 class="display-4 text-light"><i><u>Skillset</u></i></h1>
		<br>
		<br>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10  offset-md-1 text-left">
					<ul class=""><b>Back End Development</b>
						<li>PHP 7 best practices and design principles, Object Orientated Programming, and use of Composer</li>
						<li>Laravel framework for PHP and use of Artisan, Blade templating, Eloquent models, Tinker, database 
					<br>migrations user authentication, authorization, routes, controllers, webpack, and caching with Reddis</li>
						<li>MySQL and SQLite database migrations, queries, security, and CRUD use with ORMs, PDO, and API</li>
						<li>GIT/Git-Hub versioning software, initializing repositories, cloning, forking, commits, revert versions</li>
						<li>Code debugging, parsing data, form validation, filesystem manipulation, and JSON/XML formating</li>
						<li>Payment integration using Stripe API, Laravel Cashier, WooCommerce, and managing Wordpress</li>
					</ul>
					<ul><b>Front End Development</b>
						<li>Javascript (ES6) Object Oriented Programming and app design principles, algorithm scripting and
					<br> data structures, regular expressions, debugging, AJAX calls, Axios, jQuery, and custom carousels</li>
						<li>Vue.js framework for Javascript and the use of Vuex, Vue-CLI, Vue Router, NPM, and Node.js</li>
						<li>Experience with Zeplin, Figma, and turning UI/UX designs into functional pixel perfect front ends</li>
						<li>HTML 5 markup, visual design, applied accessibility, and mobile first website design principles</li>
						<li>CSS 3 and Bootstrap 4 proficiency, CSS Flexbox, CSS Grid, SASS, and mobile responsive media queries</li>
					</ul>
					<ul><b>System Administration</b>
						<li>Deployment  of  application code to servers, setting up databases, caching, special configurations</li>
						<li>Proficiency with the shell command line, SSH, FTP, shell scripting, and custom kernel compliation</li>
						<li>Ubuntu server, Red-hat server, Arch distributions, package management, Postfix mail MTA and config</li>
						<li>AWS cloud management, EC2 instances, Route 53 and hosted zone DNS name record configurations</li>
						<li>Apache2 and NGINX web server installation and configuration of virtual servers, and related modules</li>
						<li>Maintain security through routine updates, upgrades, patches, and SSL / TLS certificate installations</li>
					</ul>
					<ul><b>Other Relevant Skills/Certs</b>
						<li>FreeCodeCamp.org (300hr) Responsive Web Design Certification (2019)</li>
						<li>Experience with Matlab, Basic, Visual Basic, C Complers, Decompilers, IDEC PLC Controllers and HMIs</li>
						<li>Training and experience with LEAN Six Sigma, line balancing, efficiency, and capacity</li>
						<li>Custom wiring harnesses, relay and controller boards, Megasquirt PCM, and standalone circuitry</li>
						<li>Fine tuning of electronic fuel injection and ignition systems for racing application</li>
					</ul>
				</div>
			</div>
			<div class="row justify-content-center">
				<form action="#contact">
					<button class="btn btn-outline-light mt-5" type="submit" style="font-size:16px;">Hire Kyle</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Resume',
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
	display: inline-block;
}

#resume ul b {
	color: #68D4DB;
	font-size: 25px;
	margin-top: 10px;
}

#resume ul li {
	color: white;
	font-size: 16px;
	margin-top: 10px;
}

</style>

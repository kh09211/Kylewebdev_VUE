<template>
  <div id="services" class="container-md">	
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div class="text-center">
          <img class="img-fluid icon mt-3 pt-3 mb-4 icon-shadow" src="../assets/gearicon_blue.png" alt="gear icon">
          <br>
          <b class="title-shadow">Web Development</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>From small static sites to large ground-up dynamic applications, let's come up with the perfect solution to fit your needs</li>

          <li>My fully responsive and mobile ready websites can support a scalable user base, authentication, registration, and password management</li>

          <li>Stay up to date with custom content management systems. Keep users connected through comments, messages, posts, and subscribes</li>

          <li>I can make changes or add features to your existing website using HTML, CSS, PHP, Javascript, Wordpress, databases, and more</li>

          <li>As a team player, I would love the opportunity to work alongside your existing team. I'm a fast learner and can get up to speed quickly!</li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center mb-2">
          <img class="img-fluid icon mt-3 aws icon-shadow" src="../assets/aws_logo2.png" alt="aws icon">
          <br>
          <b class="title-shadow">Hosting and AWS</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>Large applications require complex deployment, database migrations, and caching. Let me handle this for you using the same services as companies like Netflix, Airbnb, and Expedia</li>

          <li>Once complete, your website is your property. Host, store, and deploy your web apps wherever you like. Or, let  me handle this for you</li>

          <li>Your applications are scalable so that as your needs grow, your hosting, database, and resources can grow along with you. Changes can happen within minutes, not days or weeks</li>

          <li>Want to be in control of everything? Let me help you set up your own hosting solution utilizing your own Amazon AWS Cloud webserver, storage volumes, databases, and DNS routing</li>
          
        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center">
          <img class="img-fluid icon mt-4 mb-3 pb-3 icon-shadow" src="../assets/lock_blue.png" alt="lock icon">
          <br>
          <b class="title-shadow">Security and More</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>Every website I deploy for you will recieve a secure SSL certificate. I can also handle this for you on your existing website depending on the server/host you are using</li>

          <li>All potentially sensitive information such as passwords and user data is properly encrypted or hashed and securely stored behind a firewall.</li>

          <li>Web forms or API calls that create, update, or delete from a database or upload files are validated with multiple layers of security to prevent malicious attacks theft of information</li>

          <li>Do you need a mail server setup? An existing web server configured differently? DNS record changes? For anything web server related, I offer my services as system administrator</li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <p class="mx-5 text-center">Free consultation, flexible payment options, price quotes per small job or hourly rates for large projects</p>
    </div>
    <div class="row justify-content-center align-items-center d-flex pb-5 pt-2">
        <div><img class="rounded-circle mr-1" src="../assets/kyle_square.jpg" alt="kyle photo" style="height: 85px"></div>
        <form action="#contact">
          <button class="btn btn-outline-dark ml-1" type="submit" style="font-size:16px;">Hire Kyle</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


img.icon {
	width: 40%;
  
}

img.aws {
	width: 50%;
}

@media screen and (max-width: 720px) {
/* To decrease objects size with mobile sceen adjustment */

	#services img.icon {
		width: 25%;
	}

	#services img.aws {
		width: 35%;
	}

}

#services {
	margin-top: 10vh;
	margin-bottom: 5vh;
}

#services ul {
	/* background-color: grey; */
	/* display: inline-block; */
}

#services div.text-center b {
	color: #3399CC;
	font-size: 28px;
}

#services ul li {
	color: black;
	font-size: 14px;
	margin-left: -15px;
	margin-top: 15px;
}

.icon-shadow {
  -webkit-filter: drop-shadow(5px 5px 5px darkgrey);
  filter: drop-shadow(5px 5px 5px darkgrey);
}

.title-shadow {
  text-shadow: 5px 5px 5px gainsboro;
}

</style>

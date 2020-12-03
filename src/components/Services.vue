<template>
  <div id="services" class="container-md">	
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div class="text-center">
          <transition appear
          name="gear-transition"
          enter-active-class="animate__animated animate__fadeInUp"
          >
              <img class="img-fluid icon mt-3 pt-3 mb-4 icon-shadow" src="../assets/gearicon_blue.png" alt="gear icon">
          </transition>
          <br>
          <b class="title-shadow">Web Development</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>From small static sites to large ground-up dynamic applications, let's come up with the perfect solution to fit your needs</li>

          <li>My fully responsive and mobile ready websites can support a scalable user base, authentication, registration, custom content management systems, messages, and more</li>

          <li>As a full-stack developer, I can make changes or add features to your existing website from database to front end using Javascript, HTML, CSS, PHP, Wordpress, React, etc.</li>

        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center mb-2">
          <transition appear
          name="aws-transition"
          enter-active-class="animate__animated animate__fadeInUp"
          >
              <img class="img-fluid icon mt-3 mb-1 aws icon-shadow" src="../assets/aws_logo2.png" alt="aws icon">
          </transition>
          <br>
          <b class="title-shadow">Hosting and AWS</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>Modern web applications require complex deployment, database migrations, and caching. I perfer to use Amazon's proven cloud technology, however we can host or deploy your application to wherever you like. Your website is your property</li>


          <li>With the services and technologies I perfer to use, your applications are scalable so that as your needs grow, your hosting, database, and resources can grow along with you. Some changes can happen within minutes, not days or weeks</li>
          
        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center">
          <transition appear
          name="lock-transition"
          enter-active-class="animate__animated animate__fadeInUp"
          >
             <img class="img-fluid icon mt-4 mb-3 pb-3 icon-shadow" src="../assets/lock_blue.png" alt="lock icon">
          </transition>
          <br>
          <b class="title-shadow">Security and More</b>
        </div>
        <ul class="mt-4 mr-1">

          <li>The security of your application is very important. All potentially sensitive information such as passwords and user data will be properly encrypted and always securely stored.</li>

          <li>I can set up your secure SSL certificates, DNS records, webserver configuration, mail servers, databases, firewalls, and more</li>

          
          <li>Web forms and API calls are validated with multiple layers of security and sanitization to protect against malicious attacks or corruption of information</li>

        </ul>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <p class="mx-5 text-center">Free consultation, flexible payment options, price quotes per small job or hourly rates for large projects</p>
    </div>
    <div class="row justify-content-center align-items-center d-flex pb-5 pt-2">
        <div><img id="hire-photo" class="rounded-circle mr-1" src="../assets/kyle_square.jpg" alt="kyle photo" style="height: 85px"></div>
        <form action="#contact">

          <transition
          name="hire-transition"
          enter-active-class="animate__animated animate__tada"
          >
              <button id="hire-button" v-show="hireVisible" class="btn btn-outline-dark ml-1" type="submit" style="font-size:16px;">Hire Kyle</button>
          </transition>

        </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Services',
  data() {
    return {
      hireVisible: false
    }
  },
  mounted() {
    // jquery to determin if button is visible note:arrow function used to access parent scope
    $(window).on('scroll', () => {
      if (this.$isInViewport(document.getElementById('hire-photo'), 85)) {
        this.hireVisible = true;
      }
    });
  }
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

  --animate-duration: 1.3s; /* controls speed of icon transitions */

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
	font-size: 15px;
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

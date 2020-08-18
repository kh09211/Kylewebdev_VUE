<template>
  <div id="services" class="container-md">	
    <div class="row justify-content-center mt-2">
      <div class="col-md-4">
        <div class="text-center">
          <img class="img-fluid icon my-4" src="../assets/gearicon_blue.png" alt="gear icon">
          <br>
          <b>Web Development</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>From small static sites to large ground-up dynamic applications, we can come up with the perfect solution to fit your needs.</li>

          <li>My fully responsive and mobile ready websites can support a scalable user base, secure user authorization, account registration, password management, and custom content management systems that securely and reliable serve your needs.</li>

          <li>From comments and messages to posts and follwers, I can help your user base stay connected through secure and validated forms.</li>

          <li>Once complete, your website is your property. Host, store, and deploy your web apps wherever you like. Or, let me handle the hosting and deployment for you through a secure Amazon cloud webserver.</li>

          <li>I can make changes and upgrades to your existing website that uses HTML, CSS, PHP, Javascript, SQL databases, or wordpress.</li>

          <li>Your web app code can be stored in a private or public online repository allowing ease of change, version control, and simplicity of collaboration on your project between multiple developers</li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center mb-2">
          <img class="img-fluid icon mt-3 aws" src="../assets/aws_logo2.png" alt="aws icon">
          <br>
          <b>Hosting and AWS</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>Large applications require complex deployment, database migrations, and caching. Let me handle this for you. We use the same services as companies like Netflix, Airbnb, and Expedia.</li>
          <li>Have confidence that your site will reliably be available for your customers. Our webservers run off Amazon's proven AWS Coud instances with %99.99 uptimes. Or use your own hosting solution like SiteGround.</li>
          <li>Your applications are scalable so that as your needs grow, your hosting, database, and resources can grow along with you. Changes can happen within minutes, not days or weeks.</li>
          <li>Want to be in control of everything? Let me help you set up your own hosting solution utilizing your own Amazon AWS Cloud webserver, storage volumes, databases, and DNS routing.</li>
          <li>With your own AWS Cloud web setup, you can choose the configuration of CPU, memory, storage, and networking capacity that you need. You will get a Static IP address with this service and autoscaling capability. You don't need to be a cloud computing expert, I can administer all of this for you! </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="text-center">
          <img class="img-fluid icon my-4" src="../assets/lock_blue.png" alt="lock icon">
          <br>
          <b>Security and More</b>
        </div>
        <ul class="mt-4 mr-1">
          <li>Every website hosted by an AWS cloud webserver will recieve a secure SSL certificate. I can also handle this for you on your existing website depending on the server/host you are using.</li>
          <li>All sensitive information such as passwords are properly encrypted or hashed and stored in a secure database behind a firewall.</li>
          <li>All web forms that connect to the database or upload files are validated with multiple layers of security to prevent malicious attacks and identity theft.</li>
          <li>Web Servers must undergo routine upgrades and updates to maintain the highest level of security and dependability for applications. Let me handle this for you. All servers that I administer recieve routine security updates and upgrades.</li>
          <li>Do you need a mail server setup? An existing web server configured to host a new separate domain name? DNS record changes? For anything web server related, I offer my services as system administrator and deliver you top level functionality and reliability. </li>
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

#services img.icon {
	width: 40%;
}

#services img.aws {
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

</style>

<template>
	<div id="contact" class="bg-dark">
		<div class="container-md text-center">
			<br>
			<h1 class="text-light display-4">Contact Kyle!</h1>
			<br>
			<div id="contact-form">
				
					<label class="text-light mt-4" for="name"><input type="text" id="name" placeholder="Enter your name" name="the_name" class="form-control" required /></label>
					<br>
					<label class="text-light mt-3" for="email"><input type="email" placeholder="Enter email address" id="email" name="email" class="form-control" required /></label>
					<br>
					<label class="mt-3" for="textbox" required><textarea id="textbox" name="textbox" placeholder="How can I help you?" class="form-control"></textarea></label>
					<br>
					<button v-on:click="sendEmail" name="submit" class="btn btn-primary mt-3">Send!</button>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
	  sendEmail: function() {
		  let apiUrl = process.env.VUE_APP_API_URL;
		  let nameInput = document.getElementById('name');
		  let emailInput = document.getElementById('email');
		  let textboxInput = document.getElementById('textbox');
		  let mail = {
			name: nameInput.value,
			email: emailInput.value,
			textbox: textboxInput.value  
		  };
		  console.log(mail);
		  this.$http.post(apiUrl + '/mail/contact', mail)
		  .then(res => {
			  console.log(res);
			  if (res.data == "success") {
					alert('Submitted! You should hear back from me soon!')
					// clear input fields
					nameInput.value = "";
					emailInput.value = "";
					textboxInput.value = "";
			  } else {
				  alert('There is a problem with the data entered or an error has occured. Please email me directly at kyle@kyleweb.dev, Thanks!')
			  }
		  })
		  .catch(err => console.log(err));
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
#contact {
	padding-top: 15vh;
	padding-bottom: 15vh;
}

div#contact-form textarea {
	width: 50vw ;
	height: 20vh;
}

div#contact-form input {
	width: 50vw ;
}

div#contact-form label {
	color: #3399CC;
}

div#contact-form button {
	background-color: #3399CC;
}

@media screen and (max-width: 720px) {
	 /* To decrease objects size with mobile sceen adjustment */

	div#contact-form textarea {
		width: 80vw ;
	}

	div#contact-form input {
		width: 80vw ;
	}

}
</style>

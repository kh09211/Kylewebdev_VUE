<template>
  <div class="header">
	  <div class="header_photo text-center" id="top">
		  <nav class="navbar navbar-expand-lg navbar-dark">

        <transition appear
          name="big-header-transition"
          enter-active-class="animate__animated animate__fadeInLeft"
          >
			      <a class="navbar-brand ml-2 text-light" href="#contact"><img class="logo" src="../assets/gear2.png" />&nbsp;Kyle Hopkins</a>
        </transition>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
        

         <transition appear
          name="big-header-transition"
          enter-active-class="animate__animated "
          >
			  <div class="collapse navbar-collapse flex-row-reverse mr-3" id="navbarNav">
			    <ul class="navbar-nav">
			      <li class="nav-item">
			        <a class="nav-link" href="#services">Services<span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#portfolio">Portfolio<span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#resume">Resume</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#about">About</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#contact">Contact</a>
			      </li>
            <!--
			      <li class="nav-item">
			        <form action="#contact">
			          <button class="btn btn-outline-light ml-2 mt-2" type="submit" style="padding: 2px 7px 2px 7px;">Hire</button>
	            </form>
			      </li>
            -->
			    </ul>
			  </div>
        </transition>

		  </nav>
		  <div class="text-center header-text">
        <transition appear
          name="big-header-transition"
          enter-active-class="animate__animated animate__zoomIn"
          >
			      <h1 class="header-text1 text-light mt-3">Full-Stack Developer</h1>
        </transition>
        <transition appear
          name="big-header-transition"
          enter-active-class="animate__animated animate__zoomIn"
          >
			      <h6 class="header-text2 text-light"><i>A mission for quality work and a passion for the abstract concepts behind the text</i></h6>
        </transition>
		  </div>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'NavHeader',
  data() {
    return {
      
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  --animate-duration: 1.5s;
}

.header_photo {
    background-color: #3399CC;
    /* background-image: url("../media/code.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top, right;
    */
    width: 100%;
    height: 75vh; /* 120 */
}

a.nav-link {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #FFFFFF !important;
  padding-bottom: 4px;
  text-shadow: 0px 0px 5px #404040;
  margin: 0 2px 0 2px; /* if using hire button remove margins */
  
}

a.nav-link:hover {
  border-bottom: 3px solid #68D4DB;
  margin-bottom: -3px;
  /*
  font-size: 22px;
  margin-bottom: -5px;
  margin-right: -6px;
  */
}

a.navbar-brand {
    color: whitesmoke;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    text-shadow: 0px 0px 6px #404040;
}

a.navbar-brand:hover {
  color: whitesmoke !important;
  
}

div.header-text {
    margin: 0;
    position: relative;
    top: 30%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

h1 {
    font-family: 'Rubik Mono One', sans-serif;
}

h1.header-text1 {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 40px;
    text-shadow: 0px 0px 6px #404040;
}

h6.header-text2 {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 22px;
    margin: 0 20% 0 20%;
    text-shadow: 0px 0px 4px #404040
}

.logo {
  width: 50px;
  -webkit-filter: drop-shadow(0px 0px 7px #505050);
  filter: drop-shadow(0px 0px 7px #505050);
  color: whitesmoke;
}

@media screen and (max-width: 720px) {
    /* To decrease objects size with mobile sceen adjustment */
    .header_photo {
        height: 50vh;
    }

    h1.header-text1 {
        font-size: 30px;
        display: block;
    }

    h6.header-text2 {
        font-size: 16px;
        margin: 0 20% 0 20%;
    }

    a.navbar-brand {
        font-size: 23px;
    }

    .logo {
    width: 30px;
    }
}

</style>

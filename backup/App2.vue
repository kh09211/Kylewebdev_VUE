<template>
   <main id="main">
    <nav-header></nav-header>
    <div class="divider-box"></div>
    <services></services>
    <div class="divider-box"></div>
    <portfolio v-bind:projects="projectsArr"></portfolio>
    <div class="divider-box"></div>
    <resume></resume>
    <div class="divider-box"></div>
    <about-me></about-me>
    <div class="divider-box-wide"></div>
    <contact></contact>
    <footer-end></footer-end>
  </main>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Resume from './components/Resume.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import FooterEnd from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    NavHeader,
    Services,
    Portfolio,
    Resume,
    AboutMe,
    Contact,
    FooterEnd
  },
  data() {
    return {
      projectsArr: null
    }
  },
  mounted() {
    // Make api call to get projects
    let apiUrl = process.env.VUE_APP_API_URL;
    this.$http.get(apiUrl + '/projects')
      .then(response => {this.projectsArr = response.data})
      .catch(error => console.log(error));

    //setTimeout(() => console.log(this.projectsArr[0].photos[0]), 1000);
  
   
  }

}
</script>

<style>
main {
  font-family: 'Roboto', sans-serif;
}

a {
    color: #3399CC;
}

a:hover {
  color:black;
  text-decoration: none;
}

div.divider-box {
	height: 20px;
	width: 100%;
	background-color: #68D4DB; /* #B2DAEE alternative*/
}

div.divider-box-wide {
	background-color: #3399CC;
	width: 100%;
	height: 50px;
}

</style>

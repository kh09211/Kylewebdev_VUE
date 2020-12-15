<template>
   <main id="main" class="bg-light">
    <nav-header></nav-header>
    <CodeIcons></CodeIcons>
    <div class="divider-box"></div>
    <services></services>
    <div class="divider-box"></div>
    <portfolio></portfolio>
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
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
import Services from '@/components/Services.vue'
import Portfolio from '@/components/Portfolio.vue'
import Resume from '@/components/Resume.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'
import FooterEnd from '@/components/Footer.vue'
import CodeIcons from '@/components/CodeIcons.vue'


export default {
  name: 'App',
  components: {
    NavHeader,
    Services,
    Portfolio,
    Resume,
    AboutMe,
    Contact,
    FooterEnd,
    CodeIcons
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
	height: 40px;
}

</style>

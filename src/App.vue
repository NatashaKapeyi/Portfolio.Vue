<template>
  <NavBar></NavBar>
  <main class="container">
     <router-view/>
  </main>
  <Footer></Footer>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/project">Project</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav> -->
 
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    NavBar,
  Footer

  }
  
}

</script>
<style src="@/assets/css/style.css"></style>

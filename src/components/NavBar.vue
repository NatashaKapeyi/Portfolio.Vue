<template>
  <nav class="navbar navbar-expand-lg sticky-top ">
    <div class="container-fluid">
      <router-link to="/"> 
        <img  class="img-fluid" src="https://i.ibb.co/dcQsHCF/44bf29f38d21fc21ec470f94e0778be2-removebg-preview.png" alt="logo" loading="lazy">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
          <li class="nav-item">
            <router-link class="nav-link " to="/"><i class="bi bi-house-door"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link "  to="/about"><i class="bi bi-person"></i> About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/resume"><i class="bi bi-file-earmark-person"></i> Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project"><i class="bi bi-folder"></i> Project</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/testimonials"><i class="bi bi-chat-left-quote"></i> Testimonials</router-link>
          </li>
          <li> 
            <router-link class="nav-link" to="/contact"><i class="bi bi-telephone"></i> Contact</router-link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
 
}
</script>

<style >

</style>

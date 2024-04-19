<template>
    <div class="container-fluid pb-5 justify-content-center">
      <h2 class="display-2 pt-5"> My Projects</h2>
      <!-- <h3 class="text-center text-decoration-underline pb-3">Hover over the projects</h3> -->
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 p-0" v-for="pro in projects" :key="pro">
          <div class="project-container position-relative">
            <img v-bind:src="`${pro.image}`" class="project-img img-fluid" alt="projects">
            <div class="project-overlay d-flex align-items-center justify-content-center">
              <div class="hover-content text-center">
                <h5>{{ pro.name }}</h5>
                <p>{{ pro.description }}</p>
                <div class="gap-3 d-inline-flex">
                  <a v-bind:href="`${pro.gitHub}`" target="_blank" class="btn">Github</a>
                  <a v-bind:href="`${pro.netlify}`" target="_blank" class="btn">View Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      projects() {
        return this.$store.state.projects
      }
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    }
  };
  </script>
  
  <style scoped>
  .project-container {
    overflow: hidden;
    position: relative;
    padding: 8px;
  }
  
  .project-img {
    transition: transform 0.3s ease-in-out;
  }
  
  .project-container:hover .project-img {
    transform: scale(1.1); /* Scale up the image on hover */
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .project-container:hover .project-overlay {
    opacity: 1;
  }
  
  .hover-content {
    color: #fff;
  }
  
  .hover-content h5 {
    font-size: 1.5rem;
    flex-wrap: bold;
  }
  
  .hover-content p {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .hover-content .btn {
    font-size: 1rem;
  }
  
  .btn {
    background-color: tan;
    font-weight: bold;
    color: #433030;
  }
  
  @media (max-width: 992px) {
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  
  @media (max-width: 768px) {
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }



  </style>
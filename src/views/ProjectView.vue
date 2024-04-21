<template>
  <div class="container-fluid pb-5">
    <h2 class="display-2 pt-5 text-center"> My Projects</h2>
    <div class="row justify-content-center p-2">
      <div v-for="pro in projects" :key="pro.id" class="col-lg-4 col-md-6 col-sm-12 mb-4 ">
        <div class="project-container">
          <img :src="pro.image" class="project-img img-fluid" alt="Project Image"  >
          <div class="project-overlay">
            <div class="hover-content p-1">
              <h5>{{ pro.name }}</h5>
              <p>{{ pro.description }}</p>
              <div class="btn-group" role="group">
                <a :href="pro.gitHub" target="_blank" class="btn btn-primary">Github</a>
                <a :href="pro.netlify" target="_blank" class="btn btn-secondary">View Site</a>
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
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.project-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px 5px #433030;
  transition: box-shadow 0.3s ease-in-out;
}

.project-container:hover {
  box-shadow: 0 0 15px 10px #433030;
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;
  filter: grayscale(100%);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-container:hover .project-overlay {
  opacity: 1;
}

.hover-content {
  text-align: center;
  color: #fff;
}

.hover-content h5 {
  font-size: 1.5rem;
  /* font-weight: bold; */
}

.hover-content p {
  font-size: 1rem;
  /* font-weight: bold; */
}

.btn-group {
  margin-top: 15px;
}

.btn {
  margin: 0 5px;
}

@media (max-width: 768px) {
  .project-container {
    border-radius: 0;
  }
}

.btn-primary{
  background-color: #433030;
  border:#433030;
  
}



</style>
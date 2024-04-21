<template>
  <div class="container">
    <div class="row">
      <h1 class="display-2 pt-5 glow-text ">A Brief About <span class="d-block">Myself </span></h1>
    </div>
    <div class="row" v-if="info">
      <div class="col-lg-6">
        <p class="lead fs-6" v-for="about in info " :key="about">
          {{ about }}
        </p>
      </div>
        <div class="col-lg-6" id="photos">
          <img src="https://i.ibb.co/BP5qbDv/Component-1.png" alt="photos" class="img-fluid  hoverable"  loading="lazy">
        </div>
        <h3 class="display-4 ">A few of my favorite <span class="d-block">hobbies</span></h3>
      <!-- Row for Tutoring -->
      <div class="row pt-5 ">
        <div class="col-lg-6">
          <h4 class="fs-3 mb-4 pt-5">Tutoring</h4>
          <p class="">I love giving back to my community by offering my help as an appreciation for those who have helped me during high school. It's a way for me to pay forward the support and guidance I received.</p>
        </div>
        <div class="col-lg-6 p-5">
          <div id="carouselTutoring" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.ibb.co/P4GDg5r/IMG-20221125-WA0001.jpg" class="d-block w-100" alt="1" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/NVSBVDm/IMG-20230124-WA0004.jpg" class="d-block w-100" alt="2" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/3CZQcpQ/IMG-20221130-WA0022.jpg" class="d-block w-100" alt="3" loading="lazy">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTutoring" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselTutoring" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Row for Photographing -->
      <div class="row pt-4 pb-4">
        <div class="col-lg-6">
          <h4 class="fs-3 mb-4 pt-5">Photographing</h4>
          <p class="">I love anything that has to do with art and photography. I consider it as my substitute to drawing and modeling if I am the one behind the camera. I love to capture moments and hold on to memories.</p>
        </div>
        <div class="col-lg-6 p-5">
          <div id="carouselPhotographing" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.ibb.co/fvMRSpP/IMG-20230707-WA0122.jpg" class="d-block w-100" alt="4" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/VQNnCSb/IMG-20230926-WA0013.jpg" class="d-block w-100" alt="5" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/XVSyfgJ/IMG-20230926-WA0014.jpg" class="d-block w-100" alt="6" loading="lazy">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselPhotographing" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselPhotographing" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
</div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

let store = useStore()
let info = computed(() => store.state.about)
onMounted(() => {
  store.dispatch('fetchAbout')
})
</script>

<style scoped >
/* .justify-content-center{
  right:-105px;
  position: relative;
} */

h1,
h3 {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;

}

h1,
h3,
h4,
.lead,
p {
  text-align: justify;
}

#photos{
  margin-top: -151px;
  position: relative;
}


.hoverable {
  transition: transform 0.3s ease-in-out;
  
}

.hoverable:hover {
  transform: scale(1.05); 
}


@media screen and (max-width: 899px) {
  img[alt="photos"]{
    margin-top: 100px;
  }
}


.carousel-inner img {
  border-radius: 10px; 
  
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5); 
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%; 
}

.carousel-item {
  text-align: center; 
}

.carousel-item img {
  margin: 0 auto; 
  
}



</style>
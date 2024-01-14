<template>
  <div class="container">
    <div class="row">
      <h1 class="display-2 pt-5 ">A brief about <span class="d-block">myself </span></h1>
    </div>
    <div class="row" v-if="info">
      <div class="col">
        <p class="lead fs-6" v-for="about in info " :key="about">
          {{ about }}
        </p>
        <h3 class="pt-4 display-6">A few of my favorite <span class="d-block">hobbies</span></h3>
        <div class="col">
          <h4 class="pt-3 fs-3 ">Tutoring</h4>
          <p>I love giving back to my community by offering my help as an appreciation for those who have helped me during
            high school.
          </p>
        <div class="col">
          <div id="carouselExampleAutoplaying" class="carousel slide w-75" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.ibb.co/P4GDg5r/IMG-20221125-WA0001.jpg" class="d-block w-100" alt="1">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/NVSBVDm/IMG-20230124-WA0004.jpg" class="d-block w-100" alt="2">
              </div>
              <div class="carousel-item">
                <img src="https://i.ibb.co/3CZQcpQ/IMG-20221130-WA0022.jpg" class="d-block w-100" alt="3">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> 
      </div>
      <h4 class="pt-5 fs-3 ">Photographing</h4>
      <p>I love anything that has to do with art and photography. I consider it as my substitute to drawing and modeling if I am the one behind the camera . I love to capture moments and holding on to memories. </p>
      <div id="carouselExampleRide" class="carousel slide w-75 pb-3" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/fvMRSpP/IMG-20230707-WA0122.jpg" class="d-block w-100" alt="4">
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/VQNnCSb/IMG-20230926-WA0013.jpg" class="d-block w-100" alt="5">
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/XVSyfgJ/IMG-20230926-WA0014.jpg" class="d-block w-100" alt="6">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div class="col" id="photos">
        <img src="https://i.ibb.co/BP5qbDv/Component-1.png" alt="photos" class="img-fluid">
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
}

@media screen and (max-width: 899px) {
  img[alt="photos"]{
    margin-top: 300px;
  }
}

</style>
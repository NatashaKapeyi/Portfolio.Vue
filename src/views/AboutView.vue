<template>
  <div class="container ">
    <div class="row">
      <h1 class="display-2 pt-5 ">A brief about <span class="d-block">myself </span></h1>
    </div>
    <div class="row" v-if="info">
      <div class="col">
        <p class="lead fs-6" v-for="about in info " :key="about">
          {{ about }}
        </p>
        <h3 class="pt-4 display-6">A few of my favorite <span class="d-block">hobbies</span></h3>
        <h4 class="pt-3 fs-3 ">Tutoring</h4>
        <div class="col">
        <p>I love giving back to my community by offering my help as an appreciation for those who have helped me during
          high school.
        </p>
      </div>
      <div class="col">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://drive.google.com/file/d/1KpyCmVicQlDLiAczCRKxJYDDuoKN4eA1/view" class="d-block w-100" alt="1">
            </div>
            <div class="carousel-item">
              <img src="" class="d-block w-100" alt="2">
            </div>
            <div class="carousel-item">
              <img src="" class="d-block w-100" alt="3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
      <div class="col">
        <img src="" alt="photos" class="">
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
img{
  justify-content: center;
}</style>
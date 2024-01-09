<template>
  <div class="container ">
      <div class="row">
          <h2 class="display-2">About</h2>
      </div>
      <div class="row  pt-5 " v-if="aboutme">
    <p class="lead" v-for="about in aboutme "
     :key="about">
     {{ about }}
    </p>
  </div>
  </div>
</template>

<script setup>
import { computed, onMounted} from 'vue';
import { useStore } from 'vuex';
  
  let store=useStore()
  let aboutme =computed(()=> store.state.about)
  onMounted(()=>{
    store.dispatch('fetchAbout')
  })
</script>

<style scoped >

</style>
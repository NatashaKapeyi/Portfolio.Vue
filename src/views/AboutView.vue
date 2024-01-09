<template>
  <div class="container ">
      <div class="row">
          <h2 class="display-2">About</h2>
      </div>
      <div class="row  pt-5 " v-if="info">
    <p class="lead" v-for="about in info "
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
  let info=computed(()=> store.state.about)
  onMounted(()=>{
    store.dispatch('fetchAbout')
  })
</script>

<style scoped >

</style>
<template class="Dark">
  <div class="container">
    <div id="Name" class="row ">
    <h2  class="display-1 text-end">NATASHA<span class="d-block pt-2 pe-xl-5">KAPEYI</span></h2>
    </div>
    
    <div class="row  pt-5 " v-if="jobTitle">
    <p class="lead" v-for="title in jobTitle"
     :key="title.id">
     {{ title.title }}
    </p>
  </div>
    
  </div>
</template>

<script>
export default {
computed:{
  jobTitle(){
    return this.$store.state.jobTitle
  }
},
mounted(){
  this.$store.dispatch('fetchJobTitle')
}
}



</script>

<style scoped>
#Name{
  padding-top: 150px;
}

</style>
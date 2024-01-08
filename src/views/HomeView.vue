<template>
  <div class="container">
    <div class="row">
    <h2 class="display-1 text-start ">Hello,</h2>
    </div>
    
    <div class="row text-end pt-5 " v-if="jobTitle">
      <h4 class="display-4 " id="Name">I'm Natasha Kapeyi</h4>
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

</style>
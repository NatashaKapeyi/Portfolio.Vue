<template>
  <div class="container">
    <div class="row">
     
    </div>
    <div class="row" v-if="jobTitle">
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
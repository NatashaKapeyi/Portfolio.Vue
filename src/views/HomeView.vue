<template >
  <div class="container">
    <div class="row">
      <div class="col">
     <h1>NK</h1> 
     <h2 class="bg-white align-top">PORTFOLIO</h2>
     <h3>Natasha Kapeyi</h3>
    <h4 class="display-5">A <span></span>Fullstack Developer</h4>
    <p class="display-6"><a class="text-black" href="https://drive.google.com/file/d/1JapHX95W_VrVnlbtsBC08JCz3lKhJ19j/view" download target="_blank" ><i class="bi bi-file-earmark-arrow-down"></i> </a>Carriculum Vitae</p>
    <!-- <img src="https://drive.google.com/uc?id=124JbSfBSR14fZlvEsi4Pe6wulNXg9VZe" alt="image" class="img-fluid " loading="lazy"> -->
  </div>
   
   </div>
     </div>
    </template>
    <!-- <div class="row  pt-5 " v-if="jobTitle">
    <p class="lead" v-for="title in jobTitle"
     :key="title.id">
     {{ title.title }}
    </p>
  </div> -->
    



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

h1{
  /* padding-top: px; */
  font-size: 550px;
  font-weight: 400;
  filter: blur(2px);
 margin-bottom: -200px;

}

 h2 {
  color: #000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 80px;
font-weight: 400;
position: relative;
bottom: 250px;




}
h3{
  font-size: 76px;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* position: relative;
  bottom: 250px; */
  
}
h4{
  /* position: relative;
  bottom: 250px; */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container::before{
  content: url(https://drive.google.com/uc?id=124JbSfBSR14fZlvEsi4Pe6wulNXg9VZe);
  background-repeat: no-repeat;
  position: absolute;
    top: 30.3rem;
   right:-7rem;
   flex-shrink: 0;
   overflow:hidden
   
   
  
  
 
  
}


</style>
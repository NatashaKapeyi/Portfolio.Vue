<template >
  <div class="container pt-5">
    <div class="row">
      <div class="col">
      <h1>NK</h1> 
      <h2 class="bg-white align-top">PORTFOLIO</h2>
      <h3>Natasha Kapeyi</h3>
      <h4 class="display-5">A <span></span>Fullstack Developer</h4>
      <p class="display-6"><a class="text-black" href="https://drive.google.com/file/d/1JapHX95W_VrVnlbtsBC08JCz3lKhJ19j/view" download target="_blank" ><i class="bi bi-file-earmark-arrow-down "></i></a>Carriculum Vitae
      </p>
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




</script>

<style scoped>

h1{
  /* padding-top: px; */
  font-size: 550px;
  filter: blur(2px);
 margin-bottom: -200px;

}

 h2 {
  color: #000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 80px;
position: relative;
bottom: 250px;




}
h3{
  font-size: 76px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* position: relative;
  bottom: 250px; */
  
}
h4{
  /* position: relative;
  bottom: 250px; */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1,h2,h3{
  font-weight: 400;

}

h1,h2,h3,h4,p {
overflow-x: visible;
overflow-y: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.container::before{
  content: url(https://i.ibb.co/rm9q8Bk/IMG-20200822-WA0045-removebg-preview.png);
  background-repeat: no-repeat;
  position: absolute;
    top: 33.25rem;
   right:-6rem;
   flex-shrink: 0;
  
}


i{
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor:grab;
}

@media screen and (max-width: 1000px) {
  *{
    overflow-y: hidden;
   
  }

  

  .row,.col,h1,h3,.container::before,.container{
    max-width: max-content;
    
    
  }

   
  /* .col{
     
    padding: 0;
    margin: 1px 1px 3px ;
    
  } */
  h1{
     
    width: fit-content;
    font-size: 181px; 
  
  }

  h2{
  font-size: 46px;
  bottom: -55px;
  margin-bottom: 100px;
  }

  h3{
     
    font-size: 39px;
  }

  
  .container::before{
    display: contents;
   
  }
   
  .container{
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
     align-content: space-between;
  }

  .display-6{
    text-align: start;
  }
    
    }

        
   
</style>
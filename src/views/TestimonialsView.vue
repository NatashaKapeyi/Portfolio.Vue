<template>
    <div class="container ">
        <h2 class="display-2 pt-5 fst-">What people say about me..</h2>
        <div class="row justify-content-around gap-5 pb-3 pt-3" v-if="testimonials">
            <div class="card" style="width: 18rem; padding:0cap; margin-top: 0cap ;" v-for="test in testimonials" :key="test">
  <img v-bind:src="`${ test.profile }`" class="card-img-top" alt="person" loading="lazy" >
  <div class="card-body">
    <h1 class="card-head display-5 fs-4">{{ test.name }}</h1>
    <h2 class="card-text display-6  fs-5">{{ test.surname }}</h2>  
    <!-- changed the info of the surname -->
    <p class="card-text fst-italic ">" {{ test.quotes }}. "</p>
  </div>
</div>
        </div>
    </div>
    <!-- <div class="row  pt-5 " v-if="testimonials">
    <p class="lead" v-for="test in testimonials"
     :key="test">
     {{ test.name}}
     </p>
     
    </div> -->
</template>

<script>
    export default {
        computed:{
            testimonials(){
    return this.$store.state.testimonials
  }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }
        
    }
</script>

<style scoped >
  .card{
    background-color: #433030;
    color: white;
    box-shadow: 0px 0px 15px 12px #433030;
    border: white;
  }

  @media screen and (min-width: 900px) {
 
 .gap-5{
     gap: 4rem !important
 }

 .card:hover{
  transform:scale(105%)
 }

}

/* .pt-5{
  text-shadow: 0px 0px 8px #433030;
} */


</style>
<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Testimonials</h2>
        </div>
    </div>
    <div class="row  pt-5 " v-if="testimonials">
    <p class="lead" v-for="test in testimonials"
     :key="test">
     {{ test.name}}
     </p>
     
    </div>
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
  

</style>
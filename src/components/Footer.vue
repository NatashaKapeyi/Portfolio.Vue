<template>
    <div  class="d-flex">
              <p class="lead text-white ">NZ KAPEYI  &copy;<span>{{ currYear }}</span></p>
    </div>
</template>

<script>
    export default {
        name:'FooterComp',
     data(){
        return {
            currYear:new Date().getFullYear( )
        }
     }   
    }
</script>

<style scoped>
div {
 justify-content: space-around;
}
</style>
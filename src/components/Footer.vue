<template>
    <div class="container sticky-bottom">
      <div class="row">
        <p class="lead">NZ KAPEYI  &copy;<span>{{ currYear }}</span></p>
      </div>
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

</style>
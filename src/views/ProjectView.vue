<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Project</h2>
        </div>
    </div>
    <div class="row  pt-5 " v-if="projects">
    <h1 class="lead" v-for="pro in projects"
     :key="pro">
     {{ pro.name}} <span class="d-block">{{ pro.description }}</span><img src="{{ pro.image }}" alt="picture" > <span class="d-block"></span>Github
     </h1>
     
    </div>
</template>

<script>
    export default {
        computed:{
            projects(){
            return this.$store.state.projects
        },

        },
        mounted(){
            this.$store.dispatch('fetchProjects');
        }
    };
</script>

<style scoped >

</style>
<template>
    <div class="container pb-3 justify-content-center">
        <h2 class="display-2 pt-5 "> My Projects</h2>
        <div class="row justify-content-around gap-5 ">
            <div class="card " style="width: 18rem;" v-for="pro in projects" :key="pro">
                <img v-bind:src="`${pro.image}`" class="card-img-top" alt="projects">
                <div class="card-body">
                    <h5 class="card-title">{{ pro.name }}</h5>
                    <div class="gap-3 d-inline-flex">
                    <a v-bind:href="`${pro.gitHub}`" target="_blank" class="btn ">Github</a>
                    <a v-bind:href="`${pro.netlify}`" target="_blank"  class="btn ">Netlify</a>
                </div>
                    
                </div>
            </div>
        </div>
    </div>
 


    <!-- <div class="row  pt-5 " v-if="projects"> -->
    <!-- <h1 class="lead" v-for="pro in projects"
     :key="pro">
     {{ pro.name}} <span class="d-block"></span><img src="{{ pro.image }}" alt="picture" > <span class="d-block"></span>Github
     </h1> -->
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        },

    },
    mounted() {
        this.$store.dispatch('fetchProjects');
    }
};
</script>

<style scoped >
.btn{
    background-color: tan;
    font-weight: bold;
}
.card{
    background-color: #433030;
    color: white;
}

</style>
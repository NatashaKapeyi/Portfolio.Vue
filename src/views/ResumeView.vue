<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Resume</h2>
        </div>
        <div class="row  pt-5 " v-if="education">
            <h1>Education</h1>
    <p class="lead" v-for="ed in education"
     :key="ed">
     {{ ed.year }} <span class="d-block">{{ ed.description }}</span>{{ ed.place }}
     
    </p>

  </div>
  <div class="row  pt-5 " v-if="skills">
            <h1>Skills</h1>
    <p class="lead" v-for="title in skills"
     :key="title">
     {{ title.title }}<span class="d-block">{{ title.experience }}</span>
     
    </p>
    </div>
    </div>
    
</template>

<script>
    export default {
        computed:{
            education(){
            return this.$store.state.education
        },
        skills(){
            return this.$store.state.skills
        }
    },
    mounted(){
        this.$store.dispatch('fetchEducation');
        this.$store.dispatch('fetchSkills');
    
},
 };
</script>

<style scoped >

</style>
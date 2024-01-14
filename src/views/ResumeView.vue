<template>
    <div class="container p-5 ">
        <h2 class="display-4 text-start pt-3"> Education</h2>
             <div class=" row" >
                     <div class="col-4 ">
                        <div class="education ">
                        <h1 class=" lead fs-6 " v-for="ed in education" :key="ed">
                            {{ ed.place }} 
                            <p class="d-block pt-2 ">{{ ed.year }}</p>
                            <p >{{ ed.description }}</p>
                       </h1> 
                        <h1 class=" lead fs-6" v-for="ed in education" :key="ed">
                           {{ ed.location }} 
                           <p class="d-block pt-2">{{ ed.time }}</p>
                           <p>{{ ed.text }}</p>
                      </h1>
                      <h1 class="fs-6 " v-for="ed in education" :key="ed">
                            {{ ed.where }} 
                            <p class="d-block pt-2">{{ ed.annual }}</p>
                            <p>{{ ed.detail }}</p>
                       </h1>
                    </div>
                    </div>
                      <h2 class="display-4 text-start pt-3 "> Skills</h2>
    
                <div class="col-4 ">
                    <div class="skills">
                     <h1 class="lead p-3 pt-3 fs-6" v-for="title in skills" :key="title">
                        {{ title.title }}<p class="d-block p-1 pt-2">{{ title.experience }}</p>
                    </h1>
                </div>
               </div>
                   </div>
               
                 
        </div>
</template>

<script>
export default {
    computed: {
        education() {
            return this.$store.state.education
        },
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation');
        this.$store.dispatch('fetchSkills');

    },
};
</script>

<style scoped >
h1{
    font-weight: bold;
    font-size: medium;
    text-align: justify;
   
}
p{
    font-weight: lighter;
   
}
h2{
    text-decoration: underline;
}

.col-4{
    box-shadow: 0px 0px 15px 5px rgb(128, 87, 34);
}

@media screen and (max-width: 675px) {
    .col-4{
        width: 100%;
    }
}



h1:is(:hover, :focus) {
    text-decoration:underline none;
    scale: 1.2;
    background-color: #443030;
    color: white
}

</style>
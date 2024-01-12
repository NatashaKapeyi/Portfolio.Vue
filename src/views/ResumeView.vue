<template>
    <div class="container ">
        <!-- <h2 class="display-2 pt-3">My Resume</h2> -->
        <div class=" flex-row justify-content-center pt-5 ">
            <h2 class="me-5">Education</h2>
            <h2>Skills</h2>
        </div>
        <div class="timeline justify-content-center">
        <div class="row" v-if="education">
                <div class="timeline-box left">
                    <div class="education">
                        <h1 class=" " v-for="ed in education" :key="ed">
                            {{ ed.place }} 
                            <p class="d-block  pt-1">{{ ed.year }}</p>
                            <p>{{ ed.description }}</p>
                       </h1>
                    </div>
                    </div>
                   </div>
                   <div class="row">
                    <div class="timeline-box left">
                    <div class="education">
                       <h1 class="" v-for="ed in education" :key="ed">
                           {{ ed.location }} 
                           <p class="d-block pt-1">{{ ed.time }}</p>
                           <p>{{ ed.text }}</p>
                      </h1>
                    </div>
                   </div>
                   </div>
                   <div class="row">
                    <div class="timeline-box left">
                    <div class="education ">
                        <h1 class="" v-for="ed in education" :key="ed">
                            {{ ed.where }} 
                            <p class="d-block ">{{ ed.annual }}</p>
                            <p>{{ ed.detail }}</p>
                       </h1>
                    </div>
                    </div>
                   </div>
                    
                
            </div>
            <div class="row " v-if="skills">
                <div class="col-4 pt-2"></div>
                <div class="timeline-box right text-white fs-6">
                    <div class="skills">
                     <h1 class="lead p-3 pt-3 fs-6" v-for="title in skills" :key="title">
                        {{ title.title }}<p class="d-block p-1">{{ title.experience }}</p>
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
.flex-row {
    display: flex;
    text-shadow: 0px 4px 4px rgba(243, 243, 243, 0.25);
    text-decoration: underline;
}

/* the box containing information */
.timeline-box  {
    position: relative;
    background-color: inherit;
    width: 30%;
    text-align: justify;
    left: 22%;
}
/* the skills box */
/* the dot for skills */
.right{
    top: -578px;
    background-color: #443030;

}


.timeline {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 1px;
    left: 54%;
    margin-left: -2px;
}

/* the dot */
.timeline-box::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    right: -30px;
    background-color: #443030;
    top: 28px;
    border-radius: 50%;
    z-index: 1;
}

.education {
   /* width: fit-content;
   height: fit-content; */
   padding: 12.5px;
    background-color: white;
text-align: justify;
}
h1{
    text-align: justify;
    font-weight: 400;
    font-size:large;
}
p{
    font-size: medium;
    
}
</style>
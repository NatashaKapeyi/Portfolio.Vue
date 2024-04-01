<template>
<div class="container p-5">
    <div class="row">
    <!-- Education Section -->
    <div class="col-md-6">
        <h2 class="display-4 text-center pt-3">Education</h2>
        <div class="education">
            <div class="flip-card" v-for="(ed, index) in education" :key="index">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h1 class="fw-bold">{{ ed.place }}</h1>
                        <p class="d-block pt-2">{{ ed.year }}</p>
                        <img v-bind:src="`${ed.IMG}`" class="card-img-fluid w-25" alt="place-image">
                    </div>
                    <div class="flip-card-back">
                        <p>{{ ed.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <!-- Skills Section -->
   <div class="col-md-6">
        <h2 class="display-4 text-center pt-3">Skills</h2>
        <div class="skills">
            <div class="flip-card" v-for="(title, index) in skills" :key="index">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h1 class="fw-bold">{{ title.title }}</h1>
                        <p class="d-block pt-2">{{ title.Years }}</p>
                    </div>
                    <div class="flip-card-back">
                        <p>{{ title.experience }}</p>
                    </div>
                </div>
            </div>
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
    /* font-weight: bold; */
    font-size: 30px

   
}
p{
    
    font-size: 20px;
   
}
h2{
    text-decoration: underline;
}

/* .col-4{
    box-shadow: 0px 0px 15px 5px rgb(128, 87, 34);
} */

@media screen and (max-width: 675px) {
    .col-4{
        width: 100%;
    }
}



/* h1:is(:hover, :focus) {
    text-decoration:underline none;
    scale: 1.2;
    background-color: #443030;
    color: white
} */



.flip-card {
    height: 200px; /* Set a fixed height for each flip card */
    margin-bottom: 20px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.flip-card-front {
    box-shadow: 0px 0px 15px 5px rgb(128, 87, 34);
    color:#443030;
}

.flip-card-back {
    background-color: #f5f5f5;
    color:#443030;
    transform: rotateY(180deg);
}



</style>
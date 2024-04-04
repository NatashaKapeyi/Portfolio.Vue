<template>
    <div class="container-fluid p-5">
      <div class="row">
        <!-- Tab Navigation -->
        <div class="col-md-12">
          <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="true">EDUCATION</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">SKILLS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work" type="button" role="tab" aria-controls="work" aria-selected="false">WORK EXPERIENCE</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">AWARDS</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <!-- Education Section -->
            <div class="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
              <div class="row"> <!-- Wrap the content within a row -->
                <h2 class="display-4 text-center pt-3">Education</h2>
                <div class="col-md-6">
                  <div class="education">
                    <div class="flip-card" v-for="(ed, index) in education" :key="index" @mouseover="toggleImage(ed.hoverImage)" @mouseleave="hideImage">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <h1>{{ ed.place }}</h1>
                          <p>{{ ed.year }}</p>
                          <img v-bind:src="`${ed.IMG}`" class="card-img-fluid w-25" alt="place-image">
                        </div>
                        <div class="flip-card-back">
                          <p class="text-center">{{ ed.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 image-overlay">
                  <img v-show="showImage" v-bind:src="hoveredImage" alt="Hovered Image" class="image-fluid w-75">
                </div>
              </div>
            </div>
            <!-- Skills Section -->
            <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
              <div class="row">
                  <h2 class="display-4 text-center pt-3">Skills</h2>
                <div class="col-md-6">
                  <div class="skills">
                    <div class="flip-card" v-for="(title, index) in skills" :key="index">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <h1>{{ title.title }}</h1>
                          <p>{{ title.Years }}</p>
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
           <!-- Awards Section -->
<div class="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
  <div class="row">
    <h2 class="display-4 text-center pt-3">Awards</h2>
    <div class="col-md-6">
      <div class="awards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1></h1>
              <p></p>
            </div>
            <div class="flip-card-back">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Work Experience Section -->
<div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">
  <div class="row">
    <h2 class="display-4 text-center pt-3">Work Experience</h2>
    <div class="col-md-6">
      <div class="work-experience">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>LC STUDIO INTERN</h1>
              <p>2024-Currently</p>
            </div>
            <div class="flip-card-back">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    <div class="col-md-6">
      <div class="work-experience">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>IKAMVA YOUTH TUTOR</h1>
              <p>2024-Currently</p>
            </div>
            <div class="flip-card-back">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    data() {
      return {
        showImage: false,
        hoveredImage: ''
      };
    },
    computed: {
      education() {
        return this.$store.state.education;
      },
      skills() {
        return this.$store.state.skills;
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    },
    methods: {
      toggleImage(hoverImageSrc) {
        this.hoveredImage = hoverImageSrc;
        this.showImage = true;
      },
      hideImage() {
    this.showImage = false;
  }
    }
  };
  </script>
<style scoped >
h1{
    margin-top: 50px;
    font-size: 30px

   
}
p{
    
    font-size: 20px;
    margin-bottom: 0;
   
}
h2{
    text-decoration: underline;
    color: #443030;
}

/* .col-4{
    box-shadow: 0px 0px 15px 5px rgb(128, 87, 34);
} */





/* h1:is(:hover, :focus) {
    text-decoration:underline none;
    scale: 1.2;
    background-color: #443030;
    color: white
} */


.row{
    /* flex-direction: column; */
    align-content: flex-end;
}

.flip-card {
    height: 200px; /* Set a fixed height for each flip card */
    margin-bottom: 20px;
}

.flip-card-inner {
    position: relative;
  width: 100%;
  height: 100%;
  text-align: center; /* Center-align all text */
  transition: transform 0.6s;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
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
    box-shadow: 0px 0px 15px 5px #443030;
    
    color:#443030;
}

.flip-card-back {
    background-color: #443030;
    color:white;
    transform: rotateY(180deg);
    
}

.nav-link.active {
    background-color: #443030; 
    color: #fff; 
    border-color:#443030; 
    border-radius: 0; 
  }

  /* Style for inactive tabs */
  .nav-link {
    color: #443030; 
    background-color: transparent; 
    border-color: transparent; 
    border-radius: 0; 
  }

  /* Style for tab content */
  .tab-pane {
    padding: 20px; 
    border: 1px solid #443030; 
    border-top: none;
    border-radius: 0 0 5px 5px; 
  }
  .nav-tabs{
    border-color: #443030;
  }

</style>
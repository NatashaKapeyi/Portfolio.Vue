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
              <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work" type="button" role="tab" aria-controls="work" aria-selected="false">EXPERIENCE</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">ACHIEVEMENTS</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <!-- Education Section -->
            <div class="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
              <div class="row"> <!-- Wrap the content within a row -->
                <h2 class="display-4 text-center pt-3">
                Education
              </h2>
              <h4 v-if="showHoverText" class="d-block fst-italic">Hover over cards</h4>
                <div class="col-md-6">
                  <div class="education">
                    <div class="flip-card" v-for="(ed, index) in education" :key="index" @mouseover="toggleImage(ed.hoverImage)" @mouseleave="hideImage">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <h1>{{ ed.place }}</h1>
                          <p>{{ ed.year }}</p>
                          <img v-bind:src="`${ed.IMG}`" class="card-img-fluid w-25" alt="place-image" loading="lazy" >
                        </div>
                        <div class="flip-card-back">
                          <p class="text-center">{{ ed.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 image-overlay">
                  <img v-show="showImage" v-bind:src="hoveredImage" alt="Hovered Image" class="image-fluid w-75 h-75" loading="lazy">
                </div>
              </div>
            </div>
            <!-- Skills Section -->
            <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
              <div class="row">
                  <h2 class="display-4 text-center pt-3">Skills</h2>
                  <h4 v-if="showHoverText" class="d-block fst-italic">Hover over cards</h4>
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
                <div class="col-md-6 image-overlay">
                  <img src="https://i.ibb.co/W5XxtgJ/Frame-4-1.png" alt="skills-image" class="image-fluid w-75 h-75"  loading="lazy">
                </div>
              </div>
            </div>
           <!-- Awards Section -->
<div class="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
  <div class="row">
    <h2 class="display-4 text-center pt-3">Awards</h2>
    <h4 v-if="showHoverText" class="d-block fst-italic">Hover over cards</h4>
    <div class="col-md-6">
      <div class="awards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>NEDBANK BURSARY WINNER & PRIZE</h1>
              <p>2020</p>
            </div>
            <div class="flip-card-back">
              <p>I won third place in the competition, and a prize.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="work-experience mt-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>Best Student for Business Studies in the WC Province </h1>
              <p>2020</p>
            </div>
            <div class="flip-card-back">
              <p>I am in the top 10 of students who perfomed exceptionally well for Business Studies and Economics for matric 2020</p>
            </div>
          </div>
        </div>
      <div class="work-experience mt-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>Life Choices Academy Graduate </h1>
              <p>2024</p>
            </div>
            <div class="flip-card-back">
              <p>I graduated from the Life Choices Academy on the 28th of March 2024, after the coursework and obtained my technical skills with an aggregate of over 80%.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 image-overlay">
    <img src="https://i.ibb.co/3dpPGTJ/Frame-4-2.png" alt="Hovered Image" class="image-fluid w-75 h-75" loading="lazy">
  </div>
  </div>
</div>

<!-- Work Experience Section -->
<div class="tab-pane fade" id="work" role="tabpanel" aria-labelledby="work-tab">
  <div class="row">
    <h2 class="display-4 text-center pt-3"> Work Experience</h2>
    <h4 v-if="showHoverText" class="d-block fst-italic">Hover over cards</h4>
    <div class="col-md-6">
      <div class="work-experience">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>Life Choices Studio Intern</h1>
              <p>Currently</p>
            </div>
            <div class="flip-card-back">
              <p>Recently just started at LC Studio after LC Academy coursework when I will introduced to more technical skills , including figma, wordpress and etc</p>
            </div>
          </div>
        </div>
      </div>
      <div class="work-experience mt-4"> <!-- Adding margin for separation -->
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>IKamva Youth Tutor</h1>
              <p>2021-2023</p>
            </div>
            <div class="flip-card-back">
              <p>I was a Volunteer at Ikamva Youth from 2021, in 2022 I was in a stiped payroll by an organization that was working with Ikamva Youth till I had to persue my tech journey and take a break from it.</p>
            </div>
          </div>
        </div>
      <div class="work-experience mt-4"> <!-- Adding margin for separation -->
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>Liesbeeck Gardens Financial Commitee Member</h1>
              <p>2023</p>
            </div>
            <div class="flip-card-back">
              <p>I was part of the Financial Committe of the residence I lived in 2023, I used to moniter and oversee the receipts and expenses incurred by our residence till I left in July 2023 to persue my tech journey and went back home.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 image-overlay">
    <img src="https://i.ibb.co/GMc2dLQ/Frame-4.png" alt="Hovered Image" class="image-fluid w-75 h-75" loading="lazy">
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
        hoveredImage: '',
        showHoverText: false, 
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
      this.showHoverText = true;
      setTimeout(() => {
      this.showHoverText = false;
    }, 8000);
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

.h-75{
  height: 97.8% !important;
}



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

  h4{
    color: #443030;
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

  .flip-card-back {
  padding: 20px; 
  overflow: auto; 
}

.description {
  font-size: 16px; 
  line-height: 1.5; 
  max-height: calc(100% - 40px);
}

.flip-card-front {
  font-size: 18px; /* Adjust as needed */
}

/* Media query for smaller screens */
@media (max-width: 512px) {
h1{
  font-size: 20px;
}
}

</style>
// import { lastIndexOf } from 'core-js/library/core/array'
import { createStore } from 'vuex'

const dataURL = 'https://natashakapeyi.github.io/todayPortfolioData/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education:null,
    skills:null,
    testimonials:null,
    projects:null
  },
  getters: {
  },
  mutations: {
    setAbout(state, value){
      state.about =value
    },
    setEducation(state, value){
      state.education =value
    },
    setSkills(state, value){
      state.skills =value
    },
    setTestimonials(state, value){
      state.testimonials =value
    },
    setProjects(state, value){
      state.projects =value
    }
  },
  actions: { 
    async fetchAbout(context){ try {
      let {about} = 
      await (await fetch(dataURL)).json()
      context.commit('setAbout', about)
    } catch (error) {
      console.log(error);
    }
      
  },
    async fetchEducation(context){ try {
      let {education} = 
      await (await fetch(dataURL)).json()
      context.commit('setEducation', education)
    } catch (error) {
      console.log(error);
    }
      
  },
  async fetchSkills(context){ try {
    let{skills}=
    await (await fetch(dataURL)).json()
    context.commit('setSkills',skills)
  } catch (error) {
    console.log(error);
  }
    
  },
  async fetchProjects(context){ try {
    
    let {projects}=
    await (await fetch(dataURL)).json()
    context.commit('setProjects',projects)
  } catch (error) {
    console.log(error);
  }
  },
  async fetchTestimonials(context){ try {
     let {testimonials}=
    await (await fetch(dataURL)).json()
    context.commit('setTestimonials',testimonials)
  } catch (error) {
    console.log(error);
  }
   
  },
  },
  modules: {
  }
})

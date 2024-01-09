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
    setJobTitle(state, value){
      state.jobTitle =value
    },
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
    async fetchJobTitle(context){
      let res = await fetch(dataURL)
      let {jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    },
    async fetchAbout(context){
      let {about} = 
      await (await fetch(dataURL)).json()
      context.commit('setAbout', about)
  },
    async fetchEducation(context){
      let {education} = 
      await (await fetch(dataURL)).json()
      context.commit('setEducation', education)
  },
  async fetchSkills(context){
    let{skills}=
    await (await fetch(dataURL)).json()
    context.commit('setSkills',skills)
  },
  async fetchProjects(context){
    let {projects}=
    await (await fetch(dataURL)).json()
    context.commit('setProjects',projects)
  },
  async fetchTestimonials(context){
    let {testimonials}=
    await (await fetch(dataURL)).json()
    context.commit('setTestimonials',testimonials)
  },
  },
  modules: {
  }
})

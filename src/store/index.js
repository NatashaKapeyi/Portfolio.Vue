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
      let res = await fetch (dataURL)
      let {jobTitle} = res.json
      context.commit('setJobtitle', jobTitle)
    }
  },
  modules: {
  }
})

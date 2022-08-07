import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      maVariable: "lapinragnar"
    }
  },
  getters: {
  },
  mutations: {
    bonjour(maVariable){
      console.log(`bonjour ${maVariable}`)
      
    }
  },
  actions: {
  },
  modules: {
  }
})

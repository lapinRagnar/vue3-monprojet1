import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueParticles from 'vue-particles'
import Particles from 'vue3-particles'



// createApp(App).use(store).use(router).use(VueParticles).mount('#app')
createApp(App).use(store).use(router).use(Particles).mount('#app')

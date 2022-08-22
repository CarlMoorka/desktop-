import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "./router";
import VueParticles from 'vue-particles'

const app = createApp(App)
app.use(VueParticles)
app.use(router)
app.mount('#app')





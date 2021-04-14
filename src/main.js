import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import BaseCard from './components/UI/BaseCard.vue'
import router from './router'
const app = createApp(App).use(router)
app.component('base-card', BaseCard)
app.mount('#app')
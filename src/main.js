import { createApp, } from 'vue'
import App from './App.vue'
import './index.css'

import VueAnimateOnScroll from 'vue-animate-onscroll'
 
// Using ScrollReveal's default configuration

createApp(App).use(VueAnimateOnScroll).mount('#app')

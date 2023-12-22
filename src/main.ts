import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue'
import Languages from './pages/Languages.vue'
import ShedulerEng from './pages/ShedulerEng.vue'
import ShedulerFr from './pages/ShedulerFr.vue'
import ShedulerIsp from './pages/ShedulerIsp.vue'



const routes = [
    { path: '/', component: Home },
    { path: '/languages', component: Languages },
    { path: '/schedulereng', component: ShedulerEng },
    { path: '/schedulerfr', component: ShedulerFr },
    { path: '/schedulerisp', component: ShedulerIsp },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})


createApp(App)
    .use(router)
    .mount('#app')

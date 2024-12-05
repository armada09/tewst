// import the vue-router library
import {createRouter, createWebHistory} from 'vue-router'
// import the navigation pages we want
import Waifu from '../components/Waifu.vue'


// create the url routes
const routes = [
    //{path: '/', name:Character, component:Character},
    {path: '/waifu', name:Waifu, component:Waifu}
]

const router = createRouter({history: createWebHistory(), routes, })

export default router
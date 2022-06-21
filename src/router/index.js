import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home'
import Home2 from '../pages/home/index2'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home2 
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
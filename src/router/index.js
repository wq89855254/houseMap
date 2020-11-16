import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect:'/area',
        children: [
            {
                path: '/area',
                name: 'Area',
                component: () => import(/* webpackChunkName: "about" */ '../views/area/Area.vue')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

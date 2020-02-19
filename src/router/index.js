import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../components/user/User.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/user/UserStart.vue'),
                name: 'home'
            },
            {
                path: ':id',
                component: () => import('../components/user/UserDetail.vue')
            },
            {
                path: ':id/edit',
                component: () => import('../components/user/UserEdit.vue'),
                name: 'userEdit'
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

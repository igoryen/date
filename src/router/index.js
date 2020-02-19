import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/user',
        name: 'User',
        components: {
            default: () => import('../components/user/User.vue'),
            'header-bottom': () => import('../components/Header.vue')
        },
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
    },
    {
        path: '/redirect-me',
        redirect: {
            name: 'Home'
        }
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

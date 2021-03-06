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
            'header-top': () => import('../components/Header.vue')
        },
        children: [
            {
                path: '',
                component: () => import('../components/user/UserStart.vue'),
                name: 'home'
            },
            {
                path: ':id',
                component: () => import('../components/user/UserDetail.vue'),
                // eslint-disable-next-line no-unused-vars
                beforeEnter: (to, from, next) => {
                    console.log('inside route setup!!');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: () => import('../components/user/UserEdit.vue'),
                name: 'userEdit'
            },
        ]
    },
    {
        path: '/book',
        name: 'Book',
        components: {
            default: () => import('../components/book/Book.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/directives',
        name: 'Directives',
        components: {
            default: () => import('../components/directives/Directives.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/filmix',
        name: 'Filmix',
        components: {
            default: () => import('../components/filmix/Filmix.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/transitions',
        name: 'Transitions',
        components: {
            default: () => import('../components/transitions/Transitions.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/sthome',
        name: 'ST Home',
        components: {
            default: () => import('../components/stocktrader/Trader.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/stportfolio',
        name: 'ST Portfolio',
        components: {
            default: () => import('../components/stocktrader/portfolio/Portfolio.vue'),
            'header-top': () => import('../components/Header.vue')
        }
    },
    {
        path: '/ststocks',
        name: 'ST Stocks',
        components: {
            default: () => import('../components/stocktrader/stocks/Stocks.vue'),
            'header-top': () => import('../components/Header.vue')
        }
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
    },
    {
        path: '/quote',
        name: 'Quote',
        components: {
            default: () => import('../components/quote/Quote.vue'),
            'header-top': () => import('../components/Header.vue')
        }
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
    mode: 'history',
    scrollBehavior(to /*, from*/, savedPosition) {
        // savedPosition = the position the user scrolled down to, which the browser has saved.
        if ( savedPosition ) { 
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return {
            x: 0,
            y: 0
        }
    }
});
// to execute on each routing action
router.beforeEach( (to, from, next) => {
    // console.log('global beforeEach');
    // eslint-disable-next-line no-undef
    next(); // the permission to continue the routing action to the desired route/page
});

export default router

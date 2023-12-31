import VueRouter from "vue-router";
import AppHome from './components/AppHome.vue'
import AppRegister from './components/AppRegister.vue'
import AppAbout from '@/components/AppAbout'

const routes=[
    {
        name:'AppHome',
        path:'/',
        component:AppHome
    },
    {
        name:'AppRegister',
        path:'/register',
        component:AppRegister
    },
    {
        name:'AppAbout',
        path:'/about',
        component:AppAbout
    },
    // {
    //     name:'AppLogin',
    //     path:'/about',
    //     component:AppLogin
    // }
]

const router=new VueRouter({
    routes
})

export default router;
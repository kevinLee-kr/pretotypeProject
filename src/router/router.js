import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../components/MainPage.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/signUp',
        name : 'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

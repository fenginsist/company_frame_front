import { createMemoryHistory, createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import LOGIN from '@/views/login/login.vue'
// import HR from '@/views/hr/index.vue'


const routes = [
    { path: '/', redirect: '/login' }, // 添加重定向到默认路由
    { path: '/login', component: LOGIN },
    // { path: '/hr', component: HR },

]

const router = createRouter({
    history: createWebHashHistory(),// import.meta.env.BASE_URL
    // history: createWebHistory(),
    // history: createMemoryHistory(),
    routes,
})

export default router;
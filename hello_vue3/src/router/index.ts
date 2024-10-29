// 创建一个路由器并暴露
// 1.导入路由相关依赖和相关组件
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@components/Home.vue'
import About from '@components/About.vue'
import News from '@components/News.vue'
import path from 'path'

// 2.配置路由器 router:管理routes,routes是一个key-value数组配置路由
const router = createRouter({
    history:createWebHistory(),//router的工作模式
    routes:[{//路由规则
        path: '/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/news',
        component:News
    }]

})
// 3.导出路由器
export default router
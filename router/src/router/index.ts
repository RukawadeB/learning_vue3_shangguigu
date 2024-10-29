// 创建一个路由器并暴露
// 1.导入路由相关依赖和相关组件
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Details from '@/views/Details.vue'

// 2.配置路由器 router:管理routes,routes是一个key-value数组配置路由
const router = createRouter({
    history:createWebHistory(),//router的工作模式
    routes:[{//路由规则
        name:'homepage',
        path: '/home',
        component:Home
    },
    {
        name:'aboutpage',
        path:'/about',
        component:About
    },
    {
        name:'newspage',
        path:'/news',
        component:News,
        children:[
            {
                // 子路由的path不需要加/
                name:"newsDetails",
                //：id是动态路由参数,占位符，加上？代表可选参数
                path:'details',
                component:Details,
                props(route){
                    console.log(route)
                    return route.query
                }
            }
        ]
    },
    {
        path:'/',
        redirect:'/home'
    }]

})
// 3.导出路由器
export default router
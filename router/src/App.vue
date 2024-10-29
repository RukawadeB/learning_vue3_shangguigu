<template>
    <!-- html -->
    <div class="app">
        <h2 class="title">router test</h2>
        <!-- navigator -->
         <div class="navigate">
            <!-- active-class被激活时的类名 在routerlink中不能使用class要用active-class -->
            <RouterLink replace to="/home" active-class="active">首页</RouterLink>
            <RouterLink replace :to="{name:'newspage'}" active-class="active">新闻</RouterLink>
            <RouterLink replace :to="{path:'/about'}" active-class="active">关于</RouterLink>
        </div>
        <!-- content -->
         <div class="main-content">
            <!-- 路由占位 -->
            <router-view></router-view>
         </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';

</script>

<style >
/* css */
/*App*/
.title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
}
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}
.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}
.navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow:  1px black;
    font-family:微软雅黑;
}
.main-content{
    margin: auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
</style>


<template>
<div class="news">
    <!-- navigator -->
    <ul>
        <li v-for="news in newsList" :key="news.id">
            <button @click="showNewsDetails(news)">查看新闻</button>
            <router-link :to="
                {
                    name:'newsDetails',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                }"
            >{{ news.title }}
            </router-link>
        </li>
    </ul>
    <!-- main-content -->
     <div class="news-content">
        <router-view></router-view>
     </div>
</div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { type NewsInter, type News } from '@/types';
import { useRouter } from 'vue-router';
import { RouterView, RouterLink } from 'vue-router';

let newsList:News = reactive([
    {
        id:'1',
        title:'新闻001',
        content:'新闻001的内容'
    },
    {
        id:'2',
        title:'新闻002',
        content:'新闻002的内容'
    },{
        id:'3',
        title:'新闻003',
        content:'新闻003的内容'
    },{
        id:'4',
        title:'新闻004',
        content:'新闻004的内容'
    }
])

const router = useRouter();
function showNewsDetails(news:NewsInter){
    //push()里面的写法和routerLinker的to写法一样
    //如果要使用replace模式就写router.replace()
    router.push({
        name:'newsDetails',
        query:{
            id:news.id,
            title:news.title,
            content:news.content
        }
    })
}
</script>

<style scoped>
.news{
    padding: o 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
}
.news li > a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color:#64967E;
    text-shadow: o  1px rgb(o, 84, 0);
}
.news-content{
    margin: auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
</style>
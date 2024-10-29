<template>
    <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// 获取路由器对象不是route对象
const router = useRouter();
onMounted(() => {
    setTimeout(() => {
        router.push({name:'newspage'})
    }, 1000);
})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
}
</style>
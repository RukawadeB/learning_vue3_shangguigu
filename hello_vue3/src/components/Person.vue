<template>
    <!-- html -->
    <div v-show="true" class="person">
        和为{{ sum }}<br>
        <button @click="add">点击加1</button><br>
        <hr>
        <img v-for="(dog,index) in dogList" :src=dog :key="index"><br>
        <button @click="addDog">点击添加狗狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

let {dogList, addDog} = useDog()
let {sum, add} = useSum()

</script>
<style scoped>
/* css */
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 10px;
}
img {
    width: 200px;
    margin: 20px;
}
</style>


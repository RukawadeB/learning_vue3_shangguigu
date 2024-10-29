<template>
    <!-- html -->
    <div class="person">
        <h2>这辆车{{car.name}}的价格是{{car.price}}</h2>
        <button @click="increase">点击加价</button>
        <button @click="change">更新车辆</button>
        <hr>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="(game, index) in games" v-bind:key="game.id">{{game.id}}:{{game.name}}
                <input type="text" v-model:="game.id">
                <button @click="changeGameId(index, game.id)">修改游戏id</button>
                <input type="text" v-model="game.name">
                <button @click="changeGameName(index, game.name)">修改游戏名</button>
            </li>
        </ul>
        
    </div>
</template>

<script lang="ts" setup name="Car">
import { reactive } from 'vue';
import { ref } from 'vue';
let car = ref({
    name: '宝马',
    price: 100000
})
// let newGameId = '输入游戏id'
// let newGameName = '输入游戏名'
let games = reactive([
    {id: 'lol', name: '英雄联盟'},
    {id: 'dnf', name: '地下城与勇士'},
    {id: 'cf', name: '穿越火线'}
])

function increase(){
    car.value.price += 10000
}

function changeGameId(index: number, newGameId: string){
    games[index].id = newGameId
}
function changeGameName(index: number, newGameName: string){
    games[index].name = newGameName
}

function change(){
    car.value = {name: '奔驰', price: 200000}
}

</script>

<style scoped>
/* css */
.person {
    background-color: indianred;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 10px;
}
</style>


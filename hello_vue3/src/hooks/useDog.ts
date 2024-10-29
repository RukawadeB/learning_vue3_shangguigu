import { ref, reactive } from 'vue';
import axios from 'axios';


export default function() {
    let dogList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_1571.jpg'])


    async function addDog() {
        await axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res: { data: { message: string } }) => {
            dogList.push(res.data.message)
        })
    }
    //向外暴露的东西放在一个对象里
    return {dogList, addDog}
}


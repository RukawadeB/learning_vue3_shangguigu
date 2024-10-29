// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组建
import App from './App.vue'
// 引入router
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')

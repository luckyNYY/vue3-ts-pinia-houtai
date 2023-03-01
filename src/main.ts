import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import '@/styles/index.less'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')

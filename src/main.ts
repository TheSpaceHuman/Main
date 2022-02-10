import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios, { AxiosRequestConfig } from 'axios'
import VueAxios from 'vue-axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
}
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios.create(axiosConfig))
app.mount('#app')

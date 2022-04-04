import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)
app.config.globalProperties.tokenAuth = 'No token'
app.use(router).mount('#app')


export default app

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App).use(router)

import 'bootstrap/dist/css/bootstrap.css'
import './assets/fontawesome/css/all.min.css'
import './assets/styles/eui.min.css'

Vue.mount('#app')
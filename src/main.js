import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Popper from 'vue3-popper'
import InfoBubble from './components/InfoBubble'
import OverviewLink from './components/OverviewLink'
import OtherLink from './components/OtherLink'
  
const Vue = createApp(App)

Vue.use(router)

Vue.component("Popper", Popper);
Vue.component("InfoBubble", InfoBubble)
Vue.component("OverviewLink", OverviewLink)
Vue.component("OtherLink", OtherLink)

import 'bootstrap/dist/css/bootstrap.css'
import './assets/font-awesome.min.css'
import './assets/styles/eui.min.css'
import './assets/styles/edpub.css'

Vue.mount('#app')
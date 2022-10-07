import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Popper from 'vue3-popper'
import InfoBubble from './components/InfoBubble'

/*const mixin = {
    computed: {
        dashboardRoot() {
          return process.env.VUE_APP_DASHBOARD_ROOT;
        },
        formsDaacSelection() {
          return `${process.env.VUE_APP_FORMS_ROOT}/daacs/selection`;
        },
        OverviewRoot(link) {
          return `${process.env.VUE_APP_OVERVIEW_ROOT}${link}`;
        }
    }
}*/
  
const Vue = createApp(App)
Vue.use(router)

Vue.component("Popper", Popper);
Vue.component("InfoBubble", InfoBubble)

import 'bootstrap/dist/css/bootstrap.css'
import './assets/font-awesome.min.css'
import './assets/styles/eui.min.css'
import './assets/styles/edpub.css'

Vue.mount('#app')
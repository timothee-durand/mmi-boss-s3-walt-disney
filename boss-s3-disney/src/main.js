import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//ajout bootstrap vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import "@/styles/custom-bootstrap.scss"
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

//ajout axios
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

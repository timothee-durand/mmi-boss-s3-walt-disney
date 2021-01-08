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

//ajout font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

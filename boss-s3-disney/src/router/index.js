import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Accueil.vue'
import Filmographie from "@/views/Filmographie.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/filmographie', name: 'Filmographie', component: Filmographie },
]

const router = new VueRouter({
  routes
})

export default router

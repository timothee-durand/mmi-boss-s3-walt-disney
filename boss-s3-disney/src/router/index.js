import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Accueil.vue'
import Filmographie from "@/views/Filmographie.vue";
import Biographie from "@/views/Biographie.vue";
import CreateFilm from "@/views/Film/Create.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/filmographie', name: 'Filmographie', component: Filmographie },
  { path: '/biographie', name: 'Biographie', component: Biographie },
  { path: '/film/creation', name: 'CreationFilm', component: CreateFilm },
]

const router = new VueRouter({
  routes
})

export default router

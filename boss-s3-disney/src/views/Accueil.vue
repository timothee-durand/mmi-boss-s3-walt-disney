<template>
  <div>
    <loading-screen></loading-screen>
    <div class="home-img min-vh-100 text-light d-flex flex-column justify-content-center ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-4 offset-1 pr-2">
            <h2 class="text-monospace text-primary h1 mb-4">Qui est Walt Disney ?</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 offset-1 pr-2">
            <p class="h3 mb-4">Sur ce site vous découvrirez qui est vraiment ce grand homme, réalisateur de génie et
              homme d'affaire hors pairs</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 offset-1 pr-2">
            <router-link
                class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
                to="biographie">Découvrir
            </router-link>
          </div>
        </div>
      </div>

    </div>

    <section class="bg-dark text-light pt-5 pl-2 pr-2 pb-5">
      <h3 class="text-center">Ses films</h3>
      <div class="separator-1 w-25 bg-info mx-auto mt-4 mb-4"></div>
      <div class="container w-75">
        <div class="row text-center">
          <div class="film-home col-12 col-md-4" v-for="film in films" :key="film.nom">
            <img alt="Image film alice au pays des merveills" class="img-fluid" :src="pathImg + film.img">
            <h4 class="mt-4">{{ film.nom }}</h4>
            <p>{{ getShortDesc(film.resume) }}</p>
          </div>
        </div>
        <div class="row mt-4">
          <router-link
              class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
              to="/filmographie">Plus de films
          </router-link>
        </div>
      </div>
    </section>

    <section class="bg-dark-2 text-light pl-2 pr-2 pb-5">
      <img alt="Photo de walt disney" class="img-fluid mx-auto d-block" src="../assets/img/walt-disney-colors.jpg">
      <h3 class="text-center mt-5">Sa vie</h3>
      <div class="separator-1 w-25 bg-info mx-auto mt-4 mb-4"></div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4">
            <div
                class="circle-icon rounded-circle bg-gradient-button d-flex justify-content-center align-items-center mb-2">
              <i class="fas fa-film fa-2x"></i></div>
            <h4>Réalisateur</h4>
            <p class="w-75">Il a réalisé beaucoup de films avec sa société éponyme</p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4">
            <div
                class="circle-icon rounded-circle bg-gradient-button d-flex justify-content-center align-items-center mb-2">
              <i class="far fa-money-bill-alt fa-2x"></i></div>
            <h4>Homme d'affaire</h4>
            <p class="w-75">Il a su profiter de son succès pour faire grandir sa société et sa fortume</p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4">
            <div
                class="circle-icon rounded-circle bg-gradient-button d-flex justify-content-center align-items-center mb-2">
              <i class="fas fa-pencil-alt fa-2x"></i></div>
            <h4>Animateur</h4>
            <p class="w-75">Il a aussi une grande expérience de l'animation (2D)</p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <router-link
            class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
            to="biographie">En savoir plus
        </router-link>
      </div>
    </section>
    <section
        class="bg-gradient-blue min-50-vh text-light pl-2 pr-2 pb-5 d-flex align-items-center justify-content-center">
      <blockquote cite="https://citation-celebre.leparisien.fr/auteur/walt-disney"
                  class="d-flex  justify-content-center flex-column w-75">
        <p class="h3 ">{{ citations[quote] }}</p>
        <cite class="text-light font-normal">Walt Disney</cite>
      </blockquote>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import ajaxService from "@/services/ajaxService.js";
import param from "@/param/param.js";
import LoadingScreen from "@/components/LoadingScreen.vue";



export default {
  name: 'Accueil',
  components: {LoadingScreen},
  data() {
    return {
      films: [],
      citations: [],
      quote:0
    }
  },
  computed: {
    pathImg() {
      return param.imagesFilmPath;
    },
  },
  methods: {
    getFilms() {
      ajaxService.getJson("filmographie").then(reponse => {
        for (let i = 0; i < 3; i++) {
          this.films.push(reponse[i])
        }

      }).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    },
    getShortDesc(desc) {
      return desc.slice(0, 150) + "...";
    },
    getCitations() {
      ajaxService.getJson("citations").then(reponse => this.citations = reponse).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    },

    getRandomQuoteIndex() {
      this.quote =  Math.floor(Math.random() * this.citations.length);
    }
  },
  mounted() {
    this.getFilms();
    this.getCitations();
    this.getRandomQuoteIndex()
  }
}
</script>

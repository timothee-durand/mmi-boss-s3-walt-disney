<template>
  <main>
    <section class="container">
      <div class="row">
        <div class="col-1 offset-10"><router-link :to="{name:'UdpateFilm', params:{nom:film.nom}}" class="btn btn-primary mt-1"><i class="fas fa-pencil-alt fa-2x"></i></router-link></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <img :src="pathImg+film.img" :alt="'Image du film '+film.nom" class="card-img"/>
          <h2>{{ film.nom }}</h2>
          <h3>Date de sortie</h3>
          <p> {{film.sortie}} </p>
          <h3>Durée</h3>
          <p> {{film.duree}} mn </p>
          <h3>Résumé</h3>
          <p> {{film.resume}} </p>
          <h3>Chansons du film</h3>
          <ul>
            <li v-for="chanson in film.chansons" :key="chanson"><p> {{chanson}} </p></li>
          </ul>
          <h3>Distinctions</h3>
          <ul>
            <li v-for="dist in film.dist" :key="dist"><p> {{dist}} </p></li>
          </ul>

          <share></share>
        </div>

      </div>

    </section>
    <section class="bg-gradient-blue py-5 px-2 d-flex align-items-center justify-content-center text-light">
      <router-link :to="{name: 'Film', params:{nom: getUrlFriendlyName(nextFilmName)}}" class="text-light font-weight-bold">
        <div>
          <div class="d-flex align-items-center">
            <p class="text-light mr-4 mb-0">Suivant</p>
            <i class="fas fa-chevron-right fa-2x"></i>
          </div>
          <h4 class="mt-3">{{ nextFilmName }}</h4>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
import param from "@/param/param.js";
import ajaxService from "@/services/ajaxService.js";
import utilsService from "@/services/utilsService.js";
import Share from "@/components/Share.vue";

export default {
  name: "Film",
  components: {Share},
  data() {
    return {
      film: {
        nom: "",
        img: "oswald.jpg",
        duree: "",
        resume: "",
        chansons:[],
        dist:[],
        sortie:0
      },
      films:[],
      filmKey:0,
    }
  },
  computed: {
    pathImg() {
      return param.imagesFilmPath;
    },
    nextFilmName(){
      if(this.filmKey + 1 > this.films.length -1 ){
        return this.films[0].nom;
      } else {
        return this.films[this.filmKey + 1].nom;
      }
    }
  },
  methods: {
    getUrlFriendlyName(nom){
      return utilsService.getUrlFriendlyName(nom);
    },
    getFilms() {
      ajaxService.getJson("filmographie").then(reponse => {
        this.films = reponse
        this.setFilm()
      }).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    },
    setFilm() {

      this.film = this.films.filter(function (film, key){
        let nomUrl =  utilsService.getUrlFriendlyName(this.$route.params.nom);
        let nomFilm = utilsService.getUrlFriendlyName(film.nom);

        if(nomFilm === nomUrl) {
          this.filmKey = key;
        }

        return  nomFilm === nomUrl
      }.bind(this))[0];
    }
  },
  mounted() {
    this.getFilms()
  },
  updated() {
    this.getFilms()
  }
}
</script>

<style scoped>

</style>

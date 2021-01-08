<template>
  <b-col cols="12" md="4" class="mt-3">
    <b-card>
      <img :src="pathImg+film.img" :alt="'Image du film '+film.nom" class="card-img"/>
      <b-card-body>
        <b-card-title>{{ film.nom }}</b-card-title>
        <b-card-text>{{ getShortDesc(film.resume) }}</b-card-text>
        <router-link
            class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-3 mx-auto w-75 d-block font-weight-bold"
            :to="{name:'Film', params:{nom: getUrlFriendlyName(film.nom)}}">En savoir plus
        </router-link>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script>
import param from "@/param/param.js";
import utilsService from "@/services/utilsService.js";

export default {
  name: 'FilmCard',
  props: {
    film: {
      type: Object,
      default: function () {
        return {
          nom: "",
          img: "oswald.jpg",
          duree: "",
          resume: ""
        }
      }
    },
  },
  computed: {
    pathImg() {
      return param.imagesFilmPath;
    }
  },
  methods: {
    getShortDesc(desc) {
      return desc.slice(0, 150) + "...";
    },
    getUrlFriendlyName(nom){
      return utilsService.getUrlFriendlyName(nom);
    }
  },
}
</script>

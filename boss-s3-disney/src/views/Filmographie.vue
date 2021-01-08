<template>
  <main class="top-header pt-3 px-2 mb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="8" >
          <h2>Filmographie</h2>
        </b-col>
      </b-row>
      <b-row>

          <FilmCard v-for="(film,index) in films" :key="film.nom + index" :film="film"/>

      </b-row>
    </b-container>

  </main>
</template>

<script>
import FilmCard from "@/components/FilmCard.vue";
import ajaxService from "@/services/ajaxService.js";

export default {
  name: "Filmographie",
  components: {FilmCard},
  data() {
    return {
      films: []
    }
  },
  methods: {
    getFilms() {
      ajaxService.getJson("filmographie").then(reponse => this.films = reponse).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    }
  },
  mounted() {
    this.getFilms();
  }
}
</script>


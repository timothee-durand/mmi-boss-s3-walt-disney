<template>
  <main class="top-header pt-3 px-2 container mb-3">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Ajout de film</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form class="w-75 mx-auto">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nom</label>
            <input type="text" v-model="film.nom" class="form-control" id="exampleFormControlInput1"
                   placeholder="Alice...">
          </div>
          <div class="mb-3">
            <label for="duree" class="form-label">Durée (en mn) : </label>
            <input type="number" v-model="film.duree" class="form-control" id="duree" placeholder="135">
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Date de sortie : </label>
            <b-select v-model="film.sortie" id="date" placeholder="135">
              <b-select-option v-for="year in years" :key="year" :value="year">{{ year }}</b-select-option>
            </b-select>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="url" class="form-control" v-model="film.img" id="image" placeholder="https://">
          </div>
          <div class="mb-3">
            <label for="resume" class="form-label">Résumé : </label>
            <textarea type="date" class="form-control" id="resume" placeholder="135" v-model="film.resume"></textarea>
          </div>


          <div class="mb-3">
            <b-input-group class="align-items-center">
              <label for="real" class="form-label">Chansons : </label>
              <b-btn @click="film.chansons.push('')" class="ml-auto">Ajouter</b-btn>
            </b-input-group>
            <b-input-group v-for="(chanson,index) in film.chansons" :key="chanson+index" class="mt-2">
              <input type="text" class="form-control" placeholder="WaltDisney" v-model="film.chansons[index]">
              <b-btn @click="film.chansons.splice(index, 1)" class="ml-1" size="sm">-</b-btn>
            </b-input-group>
          </div>

          <div class="mb-3">
            <b-input-group class="align-items-center">
              <label for="real" class="form-label">Distintions : </label>
              <b-btn @click="film.dist.push('')" class="ml-auto">Ajouter</b-btn>
            </b-input-group>
            <b-input-group v-for="(distinction,index) in film.dist" :key="distinction+index" class="mt-2">
              <input type="text" class="form-control" id="real" placeholder="WaltDisney" v-model="film.dist[index]">
              <b-btn @click="film.dist.splice(index, 1)" class="ml-1" size="-">-</b-btn>
            </b-input-group>
          </div>


          <b-btn type="button" @click="sendFilm"  class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-3 mx-auto w-50 d-block font-weight-bold">
            Envoyer
          </b-btn>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import ajaxService from "@/services/ajaxService.js";
import param from "@/param/param.js";

export default {
  name: "Create",
  data() {
    return {
      film:
          {
            "nom": "Oswald le lapin chanceux",
            "duree": "unknown",
            "sortie": 1927,
            "img": "oswald.jpg",
            "resume": "Oswald le lapin chanceux (Oswald the Lucky Rabbit) est une série de dessins animés américains tournant autour du personnage du même nom créé par Ub Iwerks et Walt Disney en 1927 et distribués par Universal Pictures, qui en détenait les droits. Le personnage d'Oswald le lapin a commencé sa carrière en 1927, juste après la fin des Alice Comedies.Après quelques épisodes, Universal a confié la production à d'autres studios que celui de Disney, dont ceux de Charles B. Mintz et de Walter Lantz. C'est au moment de l'arrêt du contrat entre Disney et Universal qu'est né le personnage de Mickey Mouse.Le personnage d'Oswald a été « récupéré » par la Walt Disney Company en février 2006 à la faveur d'un échange.",
            "chansons": ["Bluddle-Uddle-Um-Dum (ou The Washing Song)",],
            "dist": ["1938 : Nomination à l'Oscar de la meilleure musique de film",]
          },
      years: [],

    }
  },
  methods: {
    addYears() {
      for (let i = 1900; i < 2100; i++) {
        this.years.push(i);
      }
    },
    sendFilm() {
      let data = new FormData();
      data.append("film", JSON.stringify(this.film))

      console.log(param.createFilm)

      ajaxService.postJson("createFilm", data).then(reponse => {
        this.$bvModal.msgBoxOk("Tout bon !" + reponse)
        console.log(reponse);
      }).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    }
  },
  mounted() {
    this.addYears()
  }
}
</script>

<style scoped>

</style>

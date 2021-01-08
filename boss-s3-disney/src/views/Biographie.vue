<template>
  <main >
    <section class="container">

      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <img alt="Walt Disney" class="img-fluid mx-auto d-block" src="../assets/img/walt-disney-bio.jpg">
          <h2>Biographie</h2>
          <p> {{biographie.resume}}
          </p>
          <h3>Sa vie</h3>
          <p>{{biographie.life}}</p>
          <h3>Dates clés</h3>
          <Timeline :events="biographie.dates_cles"/>
          <Share/>
        </div>
      </div>

    </section>
    <section class="bg-gradient-blue py-5 px-2 d-flex align-items-center justify-content-center text-light">
      <router-link to="filmographie" class="text-light font-weight-bold">
        <div>
          <div class="d-flex align-items-center">
            <p class="text-light mr-4 mb-0" >Suivant</p>
            <i class="fas fa-chevron-right fa-2x"></i>
          </div>
          <h4 class="mt-3">Filmographie</h4>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
import ajaxService from "@/services/ajaxService.js";
import Timeline from "@/components/Timeline.vue";
import Share from "@/components/Share.vue";

export default {
  name: "Biographie",
  components: {Share, Timeline},
  data() {
    return {
      biographie: {}
    }
  },
  methods: {
    getBio() {
      ajaxService.getJson("biographie").then(reponse => this.biographie = reponse).catch(err => this.$bvModal.msgBoxOk("Il y a eu un problème" + err));
    }
  },
  mounted() {
    this.getBio()
  }
}
</script>


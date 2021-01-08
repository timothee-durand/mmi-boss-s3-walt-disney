<template>
  <div class="min-vh-100">
<!--    <div-->
<!--        class="loading-screen vh-100 w-100 fixed-top bg-dark overflow-hidden m-0 p-0 d-flex flex-column justify-content-center align-items-center">-->

<!--      <button type="button" class="btn btn-light rounded-pill d-block w-50 mx-auto py-3 h4" id="enter-button">Entrer-->
<!--      </button>-->
<!--    </div>-->
    <header-perso/>
    <router-view/>
    <footer-perso/>

  </div>
</template>

<script>
import HeaderPerso from "@/components/HeaderPerso.vue";
import FooterPerso from "@/components/FooterPerso.vue";

export default {
  components: {FooterPerso, HeaderPerso}
}
</script>

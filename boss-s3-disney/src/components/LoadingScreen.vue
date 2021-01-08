<template>
  <div
      class="loading-screen vh-100 w-100 fixed-top bg-dark overflow-hidden m-0 p-0 d-flex flex-column justify-content-center align-items-center"
      v-if="!loaded">
    <b-btn variant="dark" class="fixed-top ml-auto mt-2 mr-2" @click="stop"><i class="fas fa-times fa-2x"></i></b-btn>
    <button type="button" class="btn btn-light rounded-pill d-block w-50 mx-auto py-3 h4" id="enter-button"
            ref="enterButton" @click="play">Entrer
    </button>
    <img src="../assets/img/intro_disney.jpg" id="imgIntro" class="hide">
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  data() {
    return {
      audio: null
    }
  },
  computed: {
    loaded() {
      return localStorage.getItem("loaded");
    }
  },
  methods: {
    play() {
      if (!this.loaded) {
        let img = document.querySelector("#imgIntro");
        document.querySelector("#enter-button").classList.add("hide")


        let audioUrl = require('@/assets/audio/intro-disney.mp3');



        this.audio = new Audio(audioUrl);
        this.audio.play();

        this.audio.addEventListener('timeupdate', () => {
          // console.log(sound.currentTime);
          //  console.log(this.$refs);
          img.classList.remove("hide");
          img.style.opacity = this.audio.currentTime / this.audio.duration;
        })

        this.audio.addEventListener("ended", function () {

          document.querySelector(".loading-screen").classList.add("d-none")
          document.querySelector(".loading-screen").classList.remove("d-flex")

          localStorage.setItem("loaded", true);
        })
      } else {
        document.querySelector(".loading-screen").classList.add("d-none")
        document.querySelector(".loading-screen").classList.remove("d-flex")
      }

    },
    stop(){
      if(this.audio !== null) this.audio.pause();
      document.querySelector(".loading-screen").classList.add("d-none")
      document.querySelector(".loading-screen").classList.remove("d-flex")
    }

  },
  mounted() {
  },

}
</script>

<style scoped>
.hide {
  display: none !important;
}
</style>

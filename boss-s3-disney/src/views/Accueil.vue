<template>
  <div>
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
              homme
              d'affaire hors pairs</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 offset-1 pr-2">
            <router-link class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
                         to="biographie">Découvrir</router-link>
          </div>
        </div>
      </div>

    </div>

    <section class="bg-dark text-light pt-5 pl-2 pr-2 pb-5">
      <h3 class="text-center">Ses films</h3>
      <div class="separator-1 w-25 bg-info mx-auto mt-4 mb-4"></div>
      <div class="container w-75">
        <div class="row text-center">
          <div class="film-home col-12 col-md-4">
            <img alt="Image film alice au pays des merveills" class="img-fluid" src="../assets/img/alice-in-wonderland.jpg">
            <h4 class="mt-4">Alice au pays des merveilles</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>

          <div class="film-home col-12 col-md-4 mt-5 mt-md-0">
            <img alt="Image film fantasia" class="img-fluid" src="../assets/img/fantasia.jpg">
            <h4 class="mt-4">Fantasia</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>

          <div class="film-home col-12 col-md-4 mt-5 mt-md-0">
            <img alt="Image film alice au pays des merveills" class="img-fluid mx-auto"
                 src="../assets/img/alice-in-wonderland.jpg">
            <h4 class="mt-4">Alice au pays des merveilles</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>
        </div>
        <div class="row mt-4">
          <router-link class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
                       to="/filmographie">Plus de films</router-link>
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
            <p class="w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eius et eum harum
              laudantium molestiae mollitia nisi officia repellat reprehenderit.</p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4">
            <div
                class="circle-icon rounded-circle bg-gradient-button d-flex justify-content-center align-items-center mb-2">
              <i class="far fa-money-bill-alt fa-2x"></i></div>
            <h4>Homme d'affaire</h4>
            <p class="w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eius et eum harum
              laudantium molestiae mollitia nisi officia repellat reprehenderit.</p>
          </div>
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4">
            <div
                class="circle-icon rounded-circle bg-gradient-button d-flex justify-content-center align-items-center mb-2">
              <i class="fas fa-pencil-alt fa-2x"></i></div>
            <h4>Animateur</h4>
            <p class="w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eius et eum harum
              laudantium molestiae mollitia nisi officia repellat reprehenderit.</p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <router-link class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
                     to="biographie">En savoir plus</router-link>
      </div>
    </section>
    <section
        class="bg-gradient-blue min-50-vh text-light pl-2 pr-2 pb-5 d-flex align-items-center justify-content-center">
      <blockquote cite="https://citation-celebre.leparisien.fr/auteur/walt-disney"
                  class="d-flex  justify-content-center flex-column w-75">
        <p class="h3 ">Rêve ta vie en couleur, c'est le secret du bonheur.</p>
        <cite class="text-light font-normal">Walt Disney</cite>
      </blockquote>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Accueil',
  components: {
  }
}
</script>

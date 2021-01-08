<template>
  <div class="min-vh-100">
<!--    <div-->
<!--        class="loading-screen vh-100 w-100 fixed-top bg-dark overflow-hidden m-0 p-0 d-flex flex-column justify-content-center align-items-center">-->

<!--      <button type="button" class="btn btn-light rounded-pill d-block w-50 mx-auto py-3 h4" id="enter-button">Entrer-->
<!--      </button>-->
<!--    </div>-->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html"><h1 class="text-monospace text-light">Walt Disney</h1></a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler"
                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
          <i class="fas fa-bars fa-2x text-light"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0 justify-content-between">
            <li class="nav-item">
              <a aria-current="page" class="nav-link active h5 text-primary text-md-light"
                 href="./index.html">Accueil</a>
            </li>
            <li class="nav-item">
              <a aria-current="page" class="nav-link active  h5 text-primary"
                 href="./biographie.html">Biographie</a>
            </li>
            <li class="nav-item">
              <a aria-current="page" class="nav-link active  h5 text-primary" href="./filmgraphie.html">Filmographie</a>
            </li>
            <li class="nav-item">
              <a aria-current="page" class="nav-link active  h5 text-primary" href="./creation-film.html">Création
                Film</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
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
            <a class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
               href="biographie.html">Découvrir</a>
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
            <img alt="Image film alice au pays des merveills" class="img-fluid" src="img/alice-in-wonderland.jpg">
            <h4 class="mt-4">Alice au pays des merveilles</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>

          <div class="film-home col-12 col-md-4 mt-5 mt-md-0">
            <img alt="Image film fantasia" class="img-fluid" src="img/fantasia.jpg">
            <h4 class="mt-4">Fantasia</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>

          <div class="film-home col-12 col-md-4 mt-5 mt-md-0">
            <img alt="Image film alice au pays des merveills" class="img-fluid mx-auto"
                 src="img/alice-in-wonderland.jpg">
            <h4 class="mt-4">Alice au pays des merveilles</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum ipsam iusto libero magnam
              maxime necessitatibus omnis perspiciatis quae quo?</p>
          </div>
        </div>
        <div class="row mt-4">
          <a class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
             href="filmgraphie.html">Plus de films</a>
        </div>
      </div>
    </section>

    <section class="bg-dark-2 text-light pl-2 pr-2 pb-5">
      <img alt="Photo de walt disney" class="img-fluid mx-auto d-block" src="img/walt-disney-colors.jpg">
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
        <a class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-4 mx-auto font-weight-bold"
           href="biographie.html">En savoir plus</a>
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
    <footer class="bg-gradient-button w-100 py-5 px-2 text-light text-center  ">
      <div class="container">
        <div class="row text-light">
          <div class="col-6 ">
            <a class="font-weight-bold text-light" href="#">Mentions légales</a>
          </div>
          <div class="col-6 ">
            <a class="font-weight-bold text-light" href="#">A propos</a>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12"><p class="font-italic">Ce site a été réalisé dans le cadre d'un exercice pédagogique au
            département MMI de l'IUT de Belfort-Montbéliard</p></div>
        </div>
        <div class="row">
          <div class="col-12"><p class="">© Timothée DURAND, 2020</p></div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
</style>

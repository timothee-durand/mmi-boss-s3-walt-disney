<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="./"><h1 class="text-monospace text-light">Walt Disney</h1></router-link>
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
        <i class="fas fa-bars fa-2x text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 justify-content-between">
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link active h5 text-primary text-md-light"
               to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link active  h5 text-primary"
               to="/biographie">Biographie</router-link>
          </li>
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link active  h5 text-primary" to="/filmographie">Filmographie</router-link>
          </li>
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link active  h5 text-primary" to="/film/creation">Création
              Film</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderPerso'
}
</script>

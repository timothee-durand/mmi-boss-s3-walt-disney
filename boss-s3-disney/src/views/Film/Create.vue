<template>
  <main class="top-header pt-3 px-2 container">
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
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alice...">
          </div>
          <div class="mb-3">
            <label for="duree" class="form-label">Durée (en mn) : </label>
            <input type="number" class="form-control" id="duree" placeholder="135">
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Date de sortie : </label>
            <input type="date" class="form-control" id="date" placeholder="135">
          </div>

          <div class="mb-3">
            <label for="resume" class="form-label">Résumé : </label>
            <textarea type="date" class="form-control" id="resume" placeholder="135"></textarea>
          </div>

          <div class="mb-3">
            <label for="real" class="form-label">Réalisateurs : </label>
            <input type="text" class="form-control" id="real" placeholder="WaltDisney">
          </div>

          <button type="submit" class="btn btn-primary rounded-pill bg-gradient-button text-light border-0 px-5 py-3 mx-auto w-50 d-block font-weight-bold" href="biographie.html">Envoyer</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Create"
}
</script>

<style scoped>

</style>

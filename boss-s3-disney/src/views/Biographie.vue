<template>
  <main >
    <section class="container">

      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <img alt="Walt Disney" class="img-fluid mx-auto d-block" src="../assets/img/walt-disney-bio.jpg">
          <h2>Biographie</h2>
          <p>
            Walter Elias Disney dit Walt Disney est un producteur, réalisateur, scénariste et animateur américain, né le
            5
            décembre 1901 à Chicago (Illinois) et mort le 15 décembre 1966 à Burbank (Californie). Il est l'un des
            pionniers
            de l'animation et est une icône du xxe siècle.
          </p>
          <h3>Sa vie</h3>
          <p>Né en 1901 à Chicago (Etats-Unis), Walter Elias Disney dit Walt Disney et son frère Roy sont abandonnés par
            leur mère. A 16 ans, Walt quitte l'école et, en 1923, il commence à produire des dessins animés à Hollywood
            avec son frère. Entre 1926 et 1928, il réalise une série de dessins "Oswald The Rabbit" pour Universal
            Pictures. Puis il réalise son troisième dessin animé en 1928, "Steamboat Willie" où apparait une souris
            d'abord nommée Mortimer et qui deviendra par la suite le célèbre personnage emblématique de Disney : Mickey
            Mouse. Pendant près de 10 ans, il réalisera pas moins d'une centaine de courts métrages mettant en scène
            Mickey et ses acolytes : Donald, Pluto et Minnie. En 1937, Walt Disney réalise son premier long métrage
            "Blanche Neige et les sept nains" puis suivront "Pinocchio" (1940), "Fantasia"(1941) et "Bambi (1942).
            Durant les années 1950 et 1960, Walt Disney Productions est l'une des plus grosses productions
            cinématographiques au monde. Disney s'inspire de célèbres contes pour créer des personnages mythiques et
            féeriques qui marqueront de nombreuses générations. Parmi les plus célèbres des Studios Disney, on peut
            retenir "Cendrillon" en 1950, "La Belle au bois dormant" en 1959 ou "Les 101 Dalmatiens" en 1961. Ils ont
            également su se diversifier en créant des films pour enfants comme "L'île aux trésors" en 1950 et "Mary
            Poppins" en 1964. Walt Disney meurt en 1966 suite à des problèmes aux poumons. Il laissera derrière lui un
            véritable empire.</p>
          <h3>Dates clés</h3>
          <div class="timeline d-flex ">
            <div class="timeline-line">
            </div>
            <div class="d-flex flex-column">
              <div class="arrow-left rounded-lg border border-primary p-4 ml-4 ">
                <h4>5 décembre 1901 : Naissance de Walter Elias Disney</h4>
                <p>Walter Elias Disney naît à Chicago. Il y vivra cinq ans avant de déménager dans le Missouri avec
                  sa famille, qui compte ses parents ainsi que trois frères et une sœur. L'enfance du jeune Walt
                  sera marquée par de nombreux déménagements, jalonnant les opportunités de carrière de son
                  père.</p>
              </div>
              <div class="arrow-left rounded-lg border border-primary p-4 ml-4 mt-4 ">
                <h4>1 janvier 1923 : Création du Disney Brothers Studio</h4>
                <p>Walt Disney et son frère aîné Roy Oliver co-fondent un studio d'animation. Ils réalisent dans un
                  premier temps des épisodes d'une série appelée "Alice Comedies", mélangeant animation et prises
                  de
                  vue réelles. Leur entreprise adoptera son nom définitif en 1928, devenant la Walt Disney
                  Productions.
                </p>
              </div>

              <div class="arrow-left  rounded-lg border border-primary p-4 ml-4 mt-4">
                <h4>20 septembre 1928 : Première sortie pour "Mickey Mouse"</h4>
                <p>Le célèbre personnage de dessin animé créé par Walt Disney fait sa toute première apparition dans
                  un
                  court dessin animé, "Plane Crazy". Mais il est encore à l'état d'ébauche et ne s'appelle pas
                  "Mickey"
                  mais "Mortimer". La petite souris prendra son nom définitif dans le premier dessin animé sonore
                  de Walt
                  Disney "Steamboat Willie".
                </p>
              </div>
            </div>
          </div>
          <div class="share d-flex w-100 justify-content-between align-items-center my-3">
            <p class="h3 text-success">Partager</p>
            <div class="social-medias d-flex w-50 justify-content-between">
              <div class="round-social-media bg-success text-light rounded-circle text-center d-flex align-items-center justify-content-center">
                <i class="fab fa-facebook-f fa-1x"></i>
              </div>
              <div class="round-social-media bg-success text-light rounded-circle text-center d-flex align-items-center justify-content-center">
                <i class="fab fa-twitter fa-1x"></i>
              </div>
              <div class="round-social-media bg-success text-light rounded-circle text-center d-flex align-items-center justify-content-center">
                <i class="fab fa-instagram fa-1x"></i>
              </div>
              <div class="round-social-media bg-success text-light rounded-circle text-center d-flex align-items-center justify-content-center">
                <i class="fas fa-envelope fa-1x"></i>
              </div>
            </div>
          </div>
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
export default {
  name: "Biographie"
}
</script>

<style scoped>

</style>

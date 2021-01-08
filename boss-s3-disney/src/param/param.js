const host = "/";
const pathJSON = "json/"
const pathPhp = "http://localhost/boss-s3-disney/public/json/"

export default {
    filmographie: host + pathJSON +  "walt-disney-filmo.json",
    biographie: host + pathJSON + "walt-disney-bio.json",
    citations: host + pathJSON + "walt-disney-citations.json",
    imagesFilmPath: host + 'film_img/',
    createFilm : pathPhp + "addFilm.php",
    test : pathPhp + "test.php"
}

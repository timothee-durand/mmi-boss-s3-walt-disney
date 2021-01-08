import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/custom-bootstrap.scss'

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        let button = document.querySelector("#enter-button");
            button.addEventListener("click", play);

        function play() {
            button.classList.add("hide")
            //let audio = new Audio("/audio/intro-disney.mp3").play();
            let audioUrl = require('./audio/intro-disney.mp3');
            let sound = new Audio(audioUrl);
            sound.play();
            sound.addEventListener("ended", function (){
                console.log("yo")

                document.querySelector(".loading-screen").classList.add("d-none")
                document.querySelector(".loading-screen").classList.remove("d-flex")
            })
        }
    }
};




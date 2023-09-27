document.addEventListener("DOMContentLoaded", function () {

    const text1 = document.getElementById('text1');
    const conocimientos = ["Developer FrontEnd", "ux ui designer"];
    let indiceConocimientos= 0;

    function typeEffect(element, text, callback) {
        let index = 0;
        const delay = 100;

        function addChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(addChar, delay);
            } else {
        if (typeof callback === 'function') {
                callback();
            }
        }
    }
    addChar();
    }

    function siguienteFrase() {
        setTimeout(function () {
            text1.textContent = ""; 
            setTimeout(function () {
                // Muestra la siguiente frase después de 4 segundos
                indiceConocimientos = (indiceConocimientos + 1) % conocimientos.length;
                typeEffect(text1, conocimientos[indiceConocimientos], siguienteFrase);
            }, 200); // Ajusta el retraso antes de mostrar la siguiente frase aquí (4 segundos en este caso)
        }, 1700); // Ajusta el retraso después de mostrar "UX" aquí (2 segundos en este caso)
    }

    typeEffect(text1, conocimientos[indiceConocimientos], siguienteFrase);


    var listaConocimientos = document.querySelectorAll(".listaConocimientos li");

    listaConocimientos.forEach(function (item, index) {
        new Waypoint({
            element: item,
            handler: function () {
                item.classList.add("animate__animated", "animate__fadeInUp");
            },
            offset: "bottom-in-view" // Activa el elemento cuando esté en la parte inferior de la vista
        });
    });

    function irProyectos(){
        const buttonProyecto1=document.getElementById("buttonProyecto1");
        const buttonProyecto2=document.getElementById("buttonProyecto2");
        const buttonProyecto3=document.getElementById("buttonProyecto3");
        const buttonProyecto4=document.getElementById("buttonProyecto4");
        const buttonProyecto5=document.getElementById("buttonProyecto5");
        const verMas=document.getElementById("verMas");
        buttonProyecto1.addEventListener('click', function(e) {
            window.location.href = "https://gonzal11t0.github.io/loteria/";
        });
        buttonProyecto2.addEventListener('click', function(e) {
            window.location.href = "https://gonzal11t0.github.io/tabla-dinamica/";
        });
        buttonProyecto3.addEventListener('click', function(e) {
            window.location.href = "https://gonzal11t0.github.io/formulario-login-2/";
        });
        buttonProyecto4.addEventListener('click', function(e) {
            window.location.href = "https://gonzal11t0.github.io/tarjeta-precio/";
        });
        buttonProyecto5.addEventListener('click', function(e) {
            window.location.href = "https://gonzal11t0.github.io/loginAnimado/";
        });
        verMas.addEventListener("click", function(e) {
            window.location.href = "https://github.com/gonzal11t0?tab=repositories";
        });
    };    
    irProyectos()

    function irArriba() {
        const buttonArriba = document.getElementById('irArriba');
    
        buttonArriba.addEventListener("click", function () {
            // Hacer que la página se desplace al principio
            window.scrollTo({
                top: 0,
                behavior:'smooth' // Para un desplazamiento suave
            });
        });
    }
    irArriba();

    const flagsElement=document.getElementById('flags');
    const textsToChange=document.querySelectorAll('[data-section]');

    const changeLanguage=async (language)=>{

        const requestJson=await fetch(`./lenguaje/${language}.json`);
        const texts=await requestJson.json();
        for(const textToChange of  textsToChange){

            const section=textToChange.dataset.section;
            const value=textToChange.dataset.value;

            textToChange.innerHTML=texts[section][value];
        };
    }
    flagsElement.addEventListener("click",  (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    });
});
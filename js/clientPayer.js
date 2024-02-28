window.addEventListener('DOMContentLoaded', function () {

    document.getElementById("ecran2").style.display = "none";
    document.getElementById("ecran3").style.display = "none";
    document.getElementById("ecran4").style.display = "none";

    document.getElementById("btEcran1").addEventListener("click", function () {
        document.getElementById("ecran1").style.display = "none";
        document.getElementById("ecran2").style.display = "block";
    });
    document.getElementById("btEcran2").addEventListener("click", function () {
        document.getElementById("ecran2").style.display = "none";
        document.getElementById("ecran3").style.display = "block";
    });
    document.getElementById("btEcran3").addEventListener("click", function () {
        document.getElementById("ecran3").style.display = "none";
        document.getElementById("ecran4").style.display = "block";
    });

    document.getElementById("btRetour2").addEventListener("click", function () {
        document.getElementById("ecran2").style.display = "none";
        document.getElementById("ecran1").style.display = "block";
    });
    document.getElementById("btRetour3").addEventListener("click", function () {
        document.getElementById("ecran3").style.display = "none";
        document.getElementById("ecran2").style.display = "block";
    });
    document.getElementById("btRetour4").addEventListener("click", function () {
        document.getElementById("ecran4").style.display = "none";
        document.getElementById("ecran3").style.display = "block";
    });

    const forfaits = document.querySelectorAll('.card');
    const btOk = document.getElementById('btEcran1');
    let forfaitPrecedant = null;

    forfaits.forEach(forfait => {
        forfait.addEventListener("click", function () {
            if (forfaitPrecedant !== null && forfaitPrecedant !== forfait) {
                forfaitPrecedant.style.backgroundColor = "white";
            }
            if (forfait.style.backgroundColor === "red") {
                forfait.style.backgroundColor = "white";
                btOk.disabled = true;
                forfaitPrecedant = null;
            } else {
                forfait.style.backgroundColor = "red";
                btOk.disabled = false;
                forfaitPrecedant = forfait;
            }
        });
    });

    const btOk2 = document.getElementById('btEcran2');

    let nbrAnnonce = document.getElementById("inputNb");

    nbrAnnonce.addEventListener("input", function () {
        let annonce = parseFloat(nbrAnnonce.value);
        btOk2.disabled = !(annonce > 0);
    });

    setupOptionsEcran3();
});

function setupOptionsEcran3() {
    const isSelected = (option) => {
        return option.style.backgroundColor === "red";
    };

    const screen = document.getElementById("ecran3");
    const options = screen.querySelectorAll('.option');

    let dupliqueSelected = false;
    let auto96hSelected = false;

    options.forEach((option, index) => {
        option.addEventListener('click', () => {
            if (isSelected(option)) {
                option.style.backgroundColor = "white";
                optionSelectionnee = "";
            } else {
                option.style.backgroundColor = "red";
                optionSelectionnee = index + 1;
            }

            // Met à jour l'état des options "Duplique" et "Auto 96H"
            if (index === 0) {
                dupliqueSelected = !dupliqueSelected;
            } else if (index === 1) {
                auto96hSelected = !auto96hSelected;
            }

            // Vérifie si "Duplique" et "Auto 96H" sont sélectionnés, sélectionne automatiquement la troisième option
            if (dupliqueSelected && auto96hSelected) {
                options[2].style.backgroundColor = "red";
                optionSelectionnee = 3;
            } else {
                options[2].style.backgroundColor = "white";
            }
        });
    });
}






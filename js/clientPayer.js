document.addEventListener("DOMContentLoaded", function() {
    let btnOkEcran1 = document.getElementById("btOkEcran1");
    let btnRetourEcran2 = document.getElementById("btRetourEcran2");
    let btnOkEcran2 = document.getElementById("btOkEcran2");
    let btnRetourEcran3 = document.getElementById("btRetourEcran3");
    let btnOkEcran3 = document.getElementById("btOkEcran3");
    let btnRetourEcran4 = document.getElementById("btRetourEcran4");
    let ecran1 = document.getElementById("ecran1");
    let ecran2 = document.getElementById("ecran2");
    let ecran3 = document.getElementById("ecran3");
    let ecran4 = document.getElementById("ecran4");

    btnOkEcran1.addEventListener("click", function() {
        ecran1.classList.add("d-none"); 
        ecran2.classList.remove("d-none"); 
    });

    btnRetourEcran2.addEventListener("click", function() {
        ecran2.classList.add("d-none"); 
        ecran1.classList.remove("d-none"); 
    });

    btnOkEcran2.addEventListener("click", function() {
        ecran2.classList.add("d-none"); 
        ecran3.classList.remove("d-none"); 
    });

    btnRetourEcran3.addEventListener("click", function() {
        ecran3.classList.add("d-none"); 
        ecran2.classList.remove("d-none"); 
    });

    btnOkEcran3.addEventListener("click", function() {
        ecran3.classList.add("d-none"); 
        ecran4.classList.remove("d-none"); 
    });

    btnRetourEcran4.addEventListener("click", function() {
        ecran4.classList.add("d-none"); 
        ecran3.classList.remove("d-none"); 
    });

    
    let forfaits = document.querySelectorAll(".card");
    forfaits.forEach(function(forfait) {
        forfait.addEventListener("mouseover", function() {
            forfait.style.backgroundColor = "red"; 
        });
        forfait.addEventListener("mouseout", function() {
            forfait.style.backgroundColor = ""; 
        });
    });

    let forfaitSelectionne = null;

    function toggleSelection(forfait) {
        if (forfait === forfaitSelectionne) {
            forfait.classList.toggle("selected");
            forfaitSelectionne = null;
        } else {
            forfaits.forEach(function(item) {
                item.classList.remove("selected");
            });
            forfait.classList.add("selected");
            forfaitSelectionne = forfait;
        }
        checkSelection();
    }

    function checkSelection() {
        if (forfaitSelectionne !== null) {
            btnOkEcran1.removeAttribute("disabled");
        } else {
            btnOkEcran1.setAttribute("disabled", "disabled");
        }
    }

    forfaits.forEach(function(forfait) {
        forfait.addEventListener("click", function() {
            toggleSelection(forfait);
        });
    });

    btnOkEcran1.addEventListener("click", function() {
        ecran2.classList.remove("d-none"); 
    });

});

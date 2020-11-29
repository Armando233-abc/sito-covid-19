testo = document.querySelector("#testo")

function avanti(){ // biografia Armando
    let testo_Armando = "Ciao mi chiamo Armando Vigliotti, \
                        ho 17 anni e\
                        sono uno studente dell'istituto tecnico del villaggio dei ragazzi (CE)\
                        "
    let img = document.querySelector("#img_bio")
    testo.innerHTML = testo_Armando
    img.src = "../images/armando.png"
}

function indietro(){
    let testo_Crisci = "Mi chiamo Antonio, \
                       ho 17 anni e\
                       sono uno studente dell'istituto tecnico del villaggio dei ragazzi (CE)\
                       "
    let img = document.querySelector("#img_bio")
    testo.innerHTML = testo_Crisci
    img.src = "../images/antonio.png"
}
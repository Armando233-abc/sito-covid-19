testo = document.querySelector("#testo")

function avanti(){ // biografia Armando
    let testo_Armando = "Hi my name's is Armando Vigliotti, \
                        I'm 16 years old\
                        and I frequent the Informatics Techniques Institute of the Villaggio dei Ragazzi (CE)\
                        "
    let img = document.querySelector("#img_bio")
    testo.innerHTML = testo_Armando
    img.src = "../images/armando.png"
}

function indietro(){
    let testo_Crisci = "My name's Antonio, \
                       I'm 17 years old\
                       and I frequent the Informatics Techniques Institute of the Villaggio dei Ragazzi\
                       "
    let img = document.querySelector("#img_bio")
    testo.innerHTML = testo_Crisci
    img.src = "../images/antonio.png"
}
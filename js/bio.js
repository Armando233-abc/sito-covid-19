function avanti(){
    let testo = document.querySelector("#testo")
    let img = document.querySelector("#img_bio")
    testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit numquam dicta laborum, fugiat nihil quae repellendus animi architecto autem, quas nostrum natus distinctio. Distinctio voluptatum blanditiis, earum ut pariatur illum?"
    img.src = "/images/armando.png"
}

function indietro(){
    let testo = document.querySelector("#testo")
    let img = document.querySelector("#img_bio")
    testo.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, officia, sint suscipit autem ea libero aut excepturi quo rem, vel explicabo facilis nisi quas eligendi assumenda veniam ipsa vero asperiores!"
    img.src = "/images/antonio.png"
}
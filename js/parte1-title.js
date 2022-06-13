let titulo = ""
let usuario = document.getElementById("titulo")
usuario.focus()


function criarCard() {
    titulo = document.getElementById("titulo").value
    let cardSection = document.getElementById("card");
    titulo = titulo.trim()
    if (titulo == "") {
        cardSection.innerHTML += `<div>O campo de título não pode estar vazio</div>`
        cardSection.style.color = "red"
    } else {
        cardSection.innerHTML += `<div><h2>${titulo}</h2></div>`;
        cardSection.style.color = "white"
    }
}

usuario.addEventListener('keydown', function() {
    titulo = document.getElementById("titulo").value
    if (titulo.length >= 8) {
        usuario.blur()
    } else {
        console.log(titulo.length)
    }
})
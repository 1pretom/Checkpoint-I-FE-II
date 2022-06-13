let elements = 0
let urlImg = ""
let titulo = ""
let description = ""

function createCard() {
    titulo = document.getElementById("titulo").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div> <img src="${urlImg}" height="50%" width="50%">
                                    <h2>${titulo}</h2>
                                    <p>${description}<p> </div>`;

}
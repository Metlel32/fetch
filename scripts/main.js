


let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"

const ruta = `https://api.nasa.gov/planetary/apod?date=2008-05-23&api_key=${key}`




// fetch(ruta).then(rp => rp.json()).then(data => imprimirImg(data.hdurl, data.date, data.explanation, data.title))



//imprimir la imagen en la primera portada

let containerImg = document.getElementById("imagen")


function imprimirImg(img, date, explanation, title){
    let divImg = document.createElement("div")


    divImg.innerHTML = `
    
    <h2 class="text-light bg-dark text-center mt-5">${title}</h2>
    <img src="${img}" class="col-3 mt-5 rounded mx-auto d-block"  alt="aqui va una imagen">
    <p class="text-light text-center">${date}</p>
    <p class="text-light p-5"> ${explanation}</p>
    <a class="btn btn-primary " aria-current="page" href="./events.html">See more events</a>
    `
    
    containerImg.appendChild(divImg)
}



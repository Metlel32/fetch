
// fetch
let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"

let value = window.location.href

value = new URL(value).searchParams.get("value")

console.log(value);

let url = `https://api.nasa.gov/planetary/apod?date=${value}&api_key=${key}`



fetch(url).then(rp=> rp.json()).then(data => console.log(data))

let divDetalles =document.getElementById("detalles")


function imprimirDetalles(divPadre, array){

    let div = document.createElement("div")
    div.className = "container-fluid text-center"

    div.innerHTML = `<h1 class="text-center mt-5 text-light bg-dark w-100">${array.title}</h1>
    <img src="${array.url}" alt="${array.title}" class="w-50 m-5">
    <p class="card-text m-3"><small class="text-body-secondary">${array.date}</small></p>
    <p class="text-start m-5">${array.explanation}</p>`

    divPadre.appendChild(div)
}





fetch(url).then(rp=> rp.json()).then(data => imprimirDetalles(divDetalles, data))



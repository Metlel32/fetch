

// fetch
let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"
let url = `https://api.nasa.gov/planetary/apod?count=20&api_key=${key}`

fetch(url).then(rp => rp.json()).then(data => data.forEach(img =>  tarjetas(img, divTarjeta)))



let divTarjeta = document.getElementById("tarjetas")

function tarjetas(array, padre){

    let div = document.createElement("div")
    div.classList.add("card", "m-3", "container-fluid")
    div.style.width = "18rem"

    div.innerHTML =`<img src="${array.url}" class=" card-img-top rounded max-vw-50 h-50 mt-2 " alt="${array.title}">
        <div class="card-body container-fluid">
        <p class="card-text"><small class="text-body-secondary">${array.date}</small></p>
      <h5 class="card-title">${array.title}</h5>
      <p class="card-text">${array.explanation.substring(0,120)}...</p>
      <div class="card-body row align-items-end">
      
      <a href="./detalles.html?value=${array.date}" class="btn btn-secondary align-bottom">See more</a>
      </div>

    </div>`

    padre.appendChild(div)
}


// fetch
let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"
let url = `https://api.nasa.gov/planetary/apod?start_date=2008-05-01&end_date=2008-06-01&api_key=${key}`
let divCheck = document.getElementById("divCheck")

fetch(url).then(rp => rp.json()).then(data => data.forEach(img =>  tarjetas(img, divTarjeta)))
fetch(url).then(rp => rp.json()).then(data => data.forEach(check =>  crearCheck(check, divCheck)))



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
      
      <a href="./detalles.html?value=${array.date}" class="btn btn-secondary align-bottom ">See more</a>
      </div>

    </div>`

    padre.appendChild(div)
}



function crearCheck(obj, padreCheck){

  let input = document.createElement("input")
  input.type = "checkbox"
  input.name = obj.date
  input.classList.add("me-1")

  //crear el label
  let label = document.createElement("label")
  label.htmlFor = obj.date
  label.className = "me-4"  
  label.textContent = obj.date

  padreCheck.appendChild(input)
  padreCheck.appendChild(label) 
} 






let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"

const ruta = `http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-01-23&end_date=2025-01-30&detailed=false&api_key=${key}`

const ruta2= `http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-01-16&end_date=2025-01-23&detailed=false&api_key=${key}`

const ruta3 = `http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-01-09&end_date=2025-01-16&detailed=false&api_key=${key}`

fetch(ruta).then(rp => rp.json()).then(data => console.log(data.near_earth_objects))


fetch(ruta).then(rp => rp.json()).then(data => console.log(data))


fetch(ruta2).then(rp => rp.json()).then(data => console.log(data))

fetch(ruta3).then(rp => rp.json()).then(data => console.log(data))



// fetch(ruta).then(rp => rp.json()).then(data => imprimirImg(data.url, data.date, data.explanation, data.title))



let containerImg = document.getElementById("imagen")


// function imprimirImg(img, date, explanation, title){
//     let divImg = document.createElement("div")


//     divImg.innerHTML = `
    
//     <h2 class="text-light bg-dark text-center mt-5">${title}</h2>
//     <img src="${img}" class="col-3 rounded mx-auto d-block"  alt="aqui va una imagen">
//     <p class="text-light text-center">${date}</p>
//     <p class="text-light p-5"> ${explanation}</p>`
    
//     containerImg.appendChild(divImg)
// }



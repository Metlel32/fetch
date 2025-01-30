
// fetch
let key = "pnyB5l1fffDf3bch5aPaFvmKdVJoajbtoPcZcyKW"

let value = window.location.href

value = new URL(value).searchParams.get("value")

console.log(value);

let url = `https://api.nasa.gov/planetary/apod?date=${value}&api_key=${key}`

fetch(url).then(rp=> rp.json()).then(data => console.log(data))


//fetch("https://open-weather-map27.p.rapidapi.com/weather")
//.then(res => console.log (res))

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res => res.json())
.then(Response => {
    console.log(Response)
}
    )
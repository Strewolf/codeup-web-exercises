

// / const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast";
// const OPEN_WEATHER_APPID= 24c04769a5bbc5ce9b6861e15c1f7494
// $.get(API_ENDPOINT, {
//     lat: 44.34,
//     lon: 10.99,
//     appid: OPEN_WEATHER_APPID
// }).done(function(data) {
//     console.log(data);
// });
//
//
// $.get(API_ENDPOINT, {
//     lat: 44.34,
//     lon: 10.99,
//     appid: OPEN_WEATHER_APPID
// }).done(function(data) {
//     console.log(data);
// }).fail(function(error) {
//     console.log(error);
// });
// $.ajax("api.openweathermap.org/data/2.5/weather?q=london,uk&appid=44c830676e3fcd5fee91fb5c8e8ffa70", {
//
// }).done(function (data){
//     console.log(data)
// }).fail(function (error){
//     console.log(error)
// })

let button=document.querySelector(".button")
let inputValue=document.querySelector(".inputValue")
let display=document.querySelector(".display")

button.addEventListener("click", function (){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&Appid="+weatherKey+"&units=imperial")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let card;
            let name;
            let desc;
            let temp;
            for(let i = 0; i < 5; i++) {
                let card = document.createElement("div");
                card.classList.add("card");
                card = document.createElement("card");
                card.classList.add("day"+(i+1));
                name = document.createElement("h1");
                name.classList.add("name"+(i+1));
                name.innerHTML = data.city.name + ', ' + data.city.country;;
                desc = document.createElement("p");
                desc.classList.add("desc"+(i+1));
                desc.innerHTML = data.list[i].weather[0].description;
                temp = document.createElement("p");
                temp.classList.add("temp"+(i+1));
                temp.innerHTML = data.list[i*8].main.temp + "°F";
                card.appendChild(name);
                card.appendChild(desc);
                card.appendChild(temp);
                display.appendChild(card);
            }
        })
        .catch(err => alert("Wrong city name!"))
});


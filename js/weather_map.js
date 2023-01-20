// const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast";
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
let name=document.querySelector(".name")
let desc=document.querySelector(".desc")
let temp=document.querySelector(".temp")


$.ajax("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=24c04769a5bbc5ce9b6861e15c1f7494", {

}).done(function (data){
    console.log(data)
    alert("It works")
}).fail(function (error){
    console.log(error)
    alert("you fucked up")
})

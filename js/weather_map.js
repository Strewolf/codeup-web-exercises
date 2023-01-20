
let button=document.querySelector(".button")
let inputValue=document.querySelector(".inputValue")
let name=document.querySelector(".name")
let desc=document.querySelector(".desc")
let temp=document.querySelector(".temp")


$.ajax("", {

}).done(function (data){
    console.log(data)
    alert("It works")
}).fail(function (error){
    console.log(error)
    alert("you fucked up")
})

mapboxgl.accessToken=mapboxKey

let button=document.querySelector(".button")
let inputValue=document.querySelector(".inputValue")
let display=document.querySelector(".display")

button.addEventListener("click", function (){
    display.innerHTML = "";
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&Appid="+weatherKey+"&units=imperial")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let card;
            let name;
            let desc;
            let temp;

            for(let i = 0; i < 5; i++) {
                let icon = document.createElement("img");
                let card = document.createElement("div");
                card.classList.add("card");
                name = document.createElement("h5");
                name.classList.add("name"+(i+1));
                name.innerHTML = data.city.name + ', ' + data.city.country;;
                icon.src = "http://openweathermap.org/img/w/" + data.list[i*8].weather[0].icon + ".png";
                desc = document.createElement("p");
                desc.classList.add("desc"+(i+1));
                desc.innerHTML = data.list[i].weather[0].description;
                temp = document.createElement("p");
                temp.classList.add("temp"+(i+1));
                temp.innerHTML = data.list[i*8].main.temp + "°F";
                card.appendChild(name);
                card.appendChild(icon);
                card.appendChild(desc);
                card.appendChild(temp);
                display.appendChild(card);
            }


        })
        .catch(err => alert("Wrong city name!"))
});

mapboxgl.accessToken=mapboxKey
navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{
    enableHighAccuracy:true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([36.1716, 115.1391])
}
// let marker;
// function setupMap (center) {
//     map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: center,
//         zoom: 15
//     });
//     marker= new mapboxgl.Marker({draggable: true})
//         .setLngLat(center)
//         .addTo(map);
//     marker.on('dragend', function() {
//         display.innerHTML = "";
//         let lngLat = marker.getLngLat();
//         let lon = lngLat.lng;
//         let lat = lngLat.lat;
//         fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&Appid="+weatherKey+"&units=imperial")
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 let card;
//                 let name;
//                 let desc;
//                 let temp;
//                 for(let i = 0; i < 5; i++) {
//                     let icon = document.createElement("img");
//                     let card = document.createElement("div");
//                     card.classList.add("card");
//                     name = document.createElement("h5");
//                     name.classList.add("name"+(i+1));
//                     name.innerHTML = data.city.name + ', ' + data.city.country;;
//                     icon.src = "http://openweathermap.org/img/w/" + data.list[i*8].weather[0].icon + ".png";
//                     desc = document.createElement("p");
//                     desc.classList.add("desc"+(i+1));
//                     desc.innerHTML = data.list[i].weather[0].description;
//                     temp = document.createElement("p");
//                     temp.classList.add("temp"+(i+1));
//                     temp.innerHTML = data.list[i*8].main.temp + "°F";
//                     card.appendChild(name);
//                     card.appendChild(icon);
//                     card.appendChild(desc);
//                     card.appendChild(temp);
//                     display.appendChild(card);
//                 }
//
//
//             });
//     });
//     map.on('click', function(e) {
//         if (marker) marker.remove();
//         marker = new mapboxgl.Marker()
//             .setLngLat(e.lngLat)
//             .addTo(map);
//         display.innerHTML = "";
//         let lngLat = marker.getLngLat();
//         let lon = lngLat.lng;
//         let lat = lngLat.lat;
//         fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&Appid="+weatherKey+"&units=imperial")
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 let card;
//                 let name;
//                 let desc;
//                 let temp;
//                 for(let i = 0; i < 5; i++) {
//                     let icon = document.createElement("img");
//                     let card = document.createElement("div");
//                     card.classList.add("card");
//                     name = document.createElement("h5");
//                     name.classList.add("name"+(i+1));
//                     name.innerHTML = data.city.name + ', ' + data.city.country;;
//                     icon.src = "http://openweathermap.org/img/w/" + data.list[i*8].weather[0].icon + ".png";
//                     desc = document.createElement("p");
//                     desc.classList.add("desc"+(i+1));
//                     desc.innerHTML = data.list[i].weather[0].description;
//                     temp = document.createElement("p");
//                     temp.classList.add("temp"+(i+1));
//                     temp.innerHTML = data.list[i*8].main.temp + "°F";
//                     card.appendChild(name);
//                     card.appendChild(icon);
//                     card.appendChild(desc);
//                     card.appendChild(temp);
//                     display.appendChild(card);
//                 }
//
//             });
//     });
let marker;

function setupMap (center) {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    marker= new mapboxgl.Marker({draggable: true})
        .setLngLat(center)
        .addTo(map);

    marker.on('dragend', function() {
        display.innerHTML = "";
        let lngLat = marker.getLngLat();
        let lon = lngLat.lng;
        let lat = lngLat.lat;
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&Appid="+weatherKey+"&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let card;
                let name;
                let desc;
                let temp;
                for(let i = 0; i < 5; i++) {
                    let icon = document.createElement("img");
                    let card = document.createElement("div");
                    card.classList.add("card");
                    name = document.createElement("h5");
                    name.classList.add("name"+(i+1));
                    name.innerHTML = data.city.name + ', ' + data.city.country;;
                    icon.src = "http://openweathermap.org/img/w/" + data.list[i*8].weather[0].icon + ".png";
                    desc = document.createElement("p");
                    desc.classList.add("desc"+(i+1));
                    desc.innerHTML = data.list[i].weather[0].description;
                    temp = document.createElement("p");
                    temp.classList.add("temp"+(i+1));
                    temp.innerHTML = data.list[i*8].main.temp + "°F";
                    card.appendChild(name);
                    card.appendChild(icon);
                    card.appendChild(desc);
                    card.appendChild(temp);
                    display.appendChild(card);
                }
            })
            .catch(err => alert("Wrong city name!"))
    });

    map.on('click', function(e) {
        display.innerHTML = "";
        // remove previous marker
        if(marker) {
            marker.remove();
        }
        // add new marker at click location
        marker = new mapboxgl.Marker({draggable: true})
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .addTo(map);
        // update weather forecast
        let lngLat = marker.getLngLat();
        let lon = lngLat.lng;
        let lat = lngLat.lat;
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&Appid="+weatherKey+"&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let card;
                let name;
                let desc;
                let temp;
                for(let i = 0; i < 5; i++) {
                    let icon = document.createElement("img");
                    let card = document.createElement("div");
                    card.classList.add("card");
                    name = document.createElement("h5");
                    name.classList.add("name"+(i+1));
                    name.innerHTML = data.city.name + ', ' + data.city.country;;
                    icon.src = "http://openweathermap.org/img/w/" + data.list[i*8].weather[0].icon + ".png";
                    desc = document.createElement("p");
                    desc.classList.add("desc"+(i+1));
                    desc.innerHTML = data.list[i].weather[0].description;
                    temp = document.createElement("p");
                    temp.classList.add("temp"+(i+1));
                    temp.innerHTML = data.list[i*8].main.temp + "°F";
                    card.appendChild(name);
                    card.appendChild(icon);
                    card.appendChild(desc);
                    card.appendChild(temp);
                    display.appendChild(card);
                }
            })
            .catch(err => alert("Wrong city name!"))
    });


    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
}
button.addEventListener("click", function (){
    let promise = fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputValue.value+"&Appid="+weatherKey+"&units=imperial")
        .then(response => response.json())
        .then(data => {
            let lat = data.city.coord.lat;
            let lon = data.city.coord.lon;
            marker.setLngLat([lon, lat]
            ).addTo(map);
            map.flyTo({
                center: [lon, lat],
                zoom: 15
            }, {
                duration: 2000,
                essential: true


            });
                console.log(lon, lat)
        });
});
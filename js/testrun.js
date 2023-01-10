const coffeeBeans = document.querySelector('.coffee-beans');

let y = 0;
setInterval(function() {
    y -= 1;
    coffeeBeans.style.backgroundPosition = `0 ${y}px`;
}, 20);


